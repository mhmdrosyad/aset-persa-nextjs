import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faBolt } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import Message from "./Message";
import { useState } from "react";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import { useContext } from 'react';

import AuthContext from "@/utils/AuthContext";

const InfoWrapper = (props) => {
    const { status } = props;

    if(status !== null) {
        if(status === false) {
            return <Message type="error" text="Login gagal" />;
        }
        return <Message type="success" text="Login berhasil" />;
    }
    return <></>;
}

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [isSuccess, setIsSuccess] = useState(null);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                const endpoint = process.env.API_ENDPOINT;
                const mutation = `
                    mutation Login($username: String!, $password: String!) {
                        login(username: $username, password: $password) {
                            token,
                            user{id, username, email}
                        }
                    }
                `;
                const variabels = { username: values.username, password: values.password };
                const client = new GraphQLClient(endpoint);
                const data = await client.request(mutation, variabels);

                console.log('Login berhasil: ', data.login);
                const tokenid = data.login.token;
                login(tokenid);
                sessionStorage.setItem('token', tokenid);
                sessionStorage.setItem('username', data.login.user.username);
                setIsSuccess(true);
                router.push('/aset/admin');
            } catch (error) {
                setIsSuccess(false)
                console.log(error.response.errors[0].message)
            }
        }
    })

    return (
        <>
            <InfoWrapper status={isSuccess} />
            <form className="w-full sm:w-fit shadow mt-8 bg-white px-8 sm:px-20 py-12 sm:pb-24 sm:py-16 rounded-lg flex flex-col" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <span className="text-yellow-400 text-3xl"><FontAwesomeIcon size="lg" icon={faBolt} /></span>
                        <h2 className="text-center text-xl sm:text-2xl font-semibold my-4">LOGIN ASET PERSA</h2>
                    </div>
                    <input
                        className="md:w-96 rounded border border-grey-300 mt-4 p-3 w-full focus:outline-none focus:border-blue-300"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    ></input>
                    <input
                        className="rounded border border-grey-300 my-4 p-3 w-full focus:outline-none focus:border-blue-300"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    ></input>
                </div>
                <div className="flex">
                    <button className="bg-red-600 hover:bg-red-700 font-semibold text-white text-base p-3 border rounded-md grow" type="submit">
                        <FontAwesomeIcon icon={faSignIn} /> &nbsp; LOGIN
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;
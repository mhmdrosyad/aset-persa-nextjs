import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import Message from "./Message";
import { useState } from "react";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";

const InfoWrapper = (props) => {
    const { status } = props;

    if(status !== null) {
        if(status === false) {
            return <Message type="error" text="Judul atau nama aset tidak boleh kosong" />;
        }
        return <Message type="success" text="Data berhasil ditambahkan" />;
    }
    return <></>;
}

const AddAsetForm = () => {
    const [isSuccess, setIsSuccess] = useState(null);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            nama: '',
            urlImg: '',
            stock: 0,
            note: ''
        },
        validate: (values) => {
            const errors = {};

            if(!values.nama) {
                errors.nama = 'Nama harus diisi';
            }

            if(!values.urlImg) {
                errors.urlImg = 'Url gambar harus diisi';
            }

            if(!values.price) {
                errors.price = 'Harga sewa harus diisi';
            }

            return errors;
        },
        onSubmit: async (values) => {
            function convertToSlug(Text) {
                return Text.toLowerCase()
                  .replace(/[^\w ]+/g, "")
                  .replace(/ +/g, "-");
              }
            const slug = convertToSlug(values.nama);
            const endpoint = 'http://localhost:5000/api';
            const mutation = `
                mutation InsertAset($slug: String!, $nama: String!, $urlImg: String!, $stock: Int!, $note: String!, $price: String!) {
                    insertAset(input:{slug: $slug ,nama: $nama, urlImg: $urlImg, stock: $stock, note: $note, price: $price}) {
                        id
                        slug
                        nama
                        urlImg
                        stock
                        note
                        price
                    }
                }
            `;
            const variabels = { slug: slug, nama: values.nama , urlImg: values.urlImg, stock: values.stock };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            console.log('Aset created: ', data.insertAset);
            setIsSuccess(true);
        }
    })

    return (
        <>
            <InfoWrapper status={isSuccess} />
            <form className="flex flex-col w-4/5 bg-white px-12 py-6 rounded-lg shadow-sm" onSubmit={formik.handleSubmit}>
                <h1 className="relative mb-3 text-2xl font-bold text-center">
                    TAMBAH ASET
                </h1>
                <div className="flex flex-col">
                    <input
                        className="my-3 p-3 text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="nama"
                        placeholder="nama aset"
                        onChange={formik.handleChange}
                        value={formik.values.nama}
                    ></input>
                    {formik.errors.nama && <div className="text-red-600 text-xs">{formik.errors.nama}</div>}
                    <input
                        className="my-3 p-3 text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="urlImg"
                        placeholder="URL gambar"
                        onChange={formik.handleChange}
                        value={formik.values.urlImg}
                    ></input>
                    {formik.errors.urlImg && <div className="text-red-600 text-xs">{formik.errors.urlImg}</div>}
                    <input
                        className="my-3 p-3 text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="number"
                        name="stock"
                        onChange={formik.handleChange}
                        value={formik.values.stock}
                    ></input>
                    <input
                        className="my-3 p-3 text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="price"
                        placeholder="harga sewa"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    ></input>
                    {formik.errors.price && <div className="text-red-600 text-xs">{formik.errors.price}</div>}
                    <textarea
                        className="my-3 p-3 text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        name="note"
                        placeholder="keterangan tambahan"
                        onChange={formik.handleChange}
                        value={formik.values.note}
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-yellow-300 text-base p-3 rounded-md" type="submit">
                        <FontAwesomeIcon icon={faSave} /> &nbsp; Tambah
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddAsetForm;
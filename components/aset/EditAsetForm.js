import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTractor, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
        return <Message type="success" text="Data berhasil diupdate" />;
    }
    return <></>;
}

const EditAsetForm = (props) => {
    const [isSuccess, setIsSuccess] = useState(null);
    const router = useRouter();

    const { aset } = props;

    const formik = useFormik({
        initialValues: {
            nama: aset.nama,
            urlImg: aset.urlImg,
            stock: aset.stock,
            note: aset.note,
            price: aset.price
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
            const endpoint = process.env.API_ENDPOINT;
            const mutation = `
                mutation UpdateAset($id: ID!, $slug: String!, $nama: String!, $urlImg: String!, $stock: Int!, $note: String!, $price: String!) {
                    updateAset(id: $id, input:{slug: $slug, nama: $nama, urlImg: $urlImg, stock: $stock, note: $note, price: $price}) {
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
            const variabels = { id: aset.id, slug: slug, nama: values.nama, urlImg: values.urlImg, stock: values.stock, note: values.note, price: values.price };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            console.log('Aset created: ', data.updateAset);
            setIsSuccess(true);
        }
    })

    const handleDelete = async () => {
        const endpoint = 'http://localhost:5000/api';
            const mutation = `
                mutation DeleteAset($id: ID!) {
                    deleteAset(id: $id)
                }
            `;
            const variabels = { id: aset.id };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            console.log('Aset deleted: ', data.deleteAset);
            router.push("/");
    }

    return (
        <>
            <InfoWrapper status={isSuccess} />
            <form className="flex flex-col w-full lg:w-4/5" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                    <input
                        className="my-3 p-3 lg:text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="nama"
                        placeholder="nama aset"
                        onChange={formik.handleChange}
                        value={formik.values.nama}
                    ></input>
                    {formik.errors.nama && <div className="text-red-600 text-xs">{formik.errors.nama}</div>}
                    <input
                        className="my-3 p-3 lg:text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="urlImg"
                        placeholder="URL gambar"
                        onChange={formik.handleChange}
                        value={formik.values.urlImg}
                    ></input>
                    {formik.errors.urlImg && <div className="text-red-600 text-xs">{formik.errors.urlImg}</div>}

                    <input
                        className="my-3 p-3 lg:text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="number"
                        name="stock"
                        onChange={formik.handleChange}
                        value={formik.values.stock}
                    ></input>
                    <input
                        className="my-3 p-3 lg:text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="price"
                        placeholder="harga"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    ></input>
                    {formik.errors.price && <div className="text-red-600 text-xs">{formik.errors.price}</div>}
                    <textarea
                        className="my-3 p-3 lg:text-xl bg-neutral-100 font-bold w-full focus:outline-none focus:ring focus:border-blue-300"
                        name="note"
                        placeholder="keterangan tambahan"
                        onChange={formik.handleChange}
                        value={formik.values.note}
                    ></textarea>
                </div>
                <div className="flex lg:justify-end ">
                    <button className="flex-1 lg:flex-none bg-purple-700 text-white text-base lg:m-2 p-3 border rounded-md" type="submit">
                        <FontAwesomeIcon icon={faSave} /> &nbsp; Simpan
                    </button>
                    <button className="flex-1 lg:flex-none bg-red-500 text-white text-base ms-2 lg:m-2 lg:me-0 p-3 border rounded-md" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrashAlt} /> &nbsp; Delete
                    </button>
                </div>
            </form>
        </>
    )
}

export default EditAsetForm;
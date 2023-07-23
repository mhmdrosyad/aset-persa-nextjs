import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import EditAsetForm from "@/components/EditAsetForm";
import Head from 'next/head';

const EditPage = () => {
    const [aset, setAset] = useState(null);
    const router = useRouter();

    const { slug } = router.query;

    useEffect(() => {
        async function getSingleAset() {
            const endpoint = 'http://localhost:5000/api';
            const mutation = `
                query GetAset ($slug: String!) {
                    getAset (slug: $slug) {
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
            const variabels = { slug };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            setAset(data.getAset);
        }

        getSingleAset();
    }, [])

    if (!aset) return null;

    return (
        <>
            <Head>
                <title>{aset.nama}</title>
            </Head>
            <div className="flex flex-col items-center justify-center m-4 bg-white rounded-lg p-12 mt-12 shadow">
                    <div className="text-lg font-semibold me-auto text-red-600">
                        <Link href="/admin/our-aset"><FontAwesomeIcon className="me-2" icon={faArrowLeft} />Back</Link>
                    </div>
                <EditAsetForm aset={aset} />
            </div>
        </>
    )
}

export default EditPage;


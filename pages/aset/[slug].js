import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import DetailAsetComponent from "@/components/DetailAsetComponent";
import Head from 'next/head';


const DetailPage = () => {
    const [aset, setAset] = useState(null);
    const router = useRouter();

    const { slug } = router.query;

    useEffect(() => {
        async function getSingleAset() {
            const endpoint = process.env.API_ENDPOINT;
            const mutation = `
                query GetAset ($slug: String!) {
                    getAset (slug: $slug) {
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
                <title>{aset.nama} - ASET PERSA</title>
            </Head>
            <div className="bg-white px-10 py-6  shadow rounded-lg flex flex-col items-center justify-center my-8">
                <div className="flex w-full justify-between items-center">
                    <Link href="/" className="text-lg font-semibold text-red-600">
                        <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;{" "}
                        <span>Back</span>
                    </Link>
                    <span className="bg-red-600 text-white py-1 px-6 text-xs rounded-full">Stock: {aset.stock}</span>
                </div>
                <DetailAsetComponent aset={aset} />
            </div>
        </>
    )
}

export default DetailPage;


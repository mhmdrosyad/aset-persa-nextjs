import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import DetailAsetComponent from "@/components/aset/DetailAsetComponent";
import Head from 'next/head';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonLoading from "@/components/aset/SkeletonLoading";

const DetailPage = () => {
    const [isLoading, setIsLoading] = useState(true);
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
            setIsLoading(false);
        }
        if(slug){
            getSingleAset();
        }
    }, [slug])

    return (
        <>
            <Head>
            {isLoading ? (<title>Loading...</title>) : (<title>{aset.nama} - ASET PERSA</title>)}
            </Head>

            {isLoading ? (
                <div className="bg-white px-10 py-6  shadow rounded-lg flex flex-col items-center justify-center my-8">
                    <div className="flex w-full justify-between items-center">
                        <div className="w-full flex flex-col gap-6 my-6 items-center md:items-stretch">
                            <div className='mt-3 w-full h-48 object-cover object-center'><Skeleton height={200} /></div>
                            <div className="flex flex-col w-full gap-2">
                                <Skeleton height={38} />
                                <Skeleton height={28} width={130} />
                                <Skeleton className="mt-3" height={20} />
                                <Skeleton height={40} width={130} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
            <div className="bg-white px-10 py-6  shadow rounded-lg flex flex-col items-center justify-center my-8">
                <div className="flex w-full justify-between items-center">
                    <Link href="/aset" className="text-lg font-semibold text-red-600">
                        <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;{" "}
                        <span>Back</span>
                    </Link>
                    <span className="bg-red-600 text-white py-1 px-6 text-xs rounded-full">Stock: {aset.stock}</span>
                </div>
                <DetailAsetComponent aset={aset} />
            </div>
            )}
        </>
    )
}

export default DetailPage;


import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";

const AsetsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4;

    const [asets, setAsets] = useState("")
    const [totalItems, setTotalItems] = useState(0)

    const totalPages = Math.ceil(totalItems / itemPerPage);
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentData = asets.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePinjam = (e) => {
        console.log(e);
    }

    useEffect(() => {
        async function getAsets() {
            const endpoint = process.env.API_ENDPOINT;
            const query = `
                query {
                    getAsets {
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
            const client = new GraphQLClient(endpoint);
            const data = await client.request(query);
            setAsets(data.getAsets);
            setTotalItems(data.getAsets.length)
        }
        getAsets();
    }, [])

    return (
            <div className="flex flex-col gap-6 my-8 overflow-y-auto">
                {currentData &&
                    currentData.map((aset) => {
                        return(
                            <div className="bg-white p-10 shadow rounded-lg flex flex-col sm:flex-row gap-6 relative overflow-hidden" key={aset.id}>
                                <div className="flex overflow-y-hidden h-36">
                                    <Link className="w-full" href={`/aset/${aset.slug}`}>
                                        <Image className="w-full object-center object-cover" src={aset.urlImg} width={200} height={150} alt={aset.nama} loading="lazy"/>
                                    </Link>
                                </div>
                                <div className="flex gap-2 flex-col w-full">
                                    <h3 className="text-2xl font-semibold text-grey-900 capitalize">
                                        <Link href={`/aset/${aset.slug}`}>{aset.nama}</Link>
                                    </h3>
                                    <p className="text-red-600 text-2xl font-semibold">Rp. {aset.price}</p>
                                    <div className="mt-3 sm:mt-auto">
                                        <Link className="px-4 py-2 ease-linear duration-200 bg-yellow-300 hover:bg-yellow-400 rounded font-semibold text-center" href={`/aset/aset/${aset.slug}`}>
                                            <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
                                            DETAIL
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-yellow-300 w-24 h-24 rounded-full absolute -top-8 -right-8">
                                </div>
                                <p className="font-semibold absolute top-0 right-0 px-6 py-4">{aset.stock}</p>
                            </div>
                        )
                    })
                }
                {totalItems <= itemPerPage ? (<></>) : (<Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />)}
                
            </div>
    )
}

export default AsetsList;
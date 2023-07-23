import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination";

const ListAset = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 4;

    const [asets, setAsets] = useState("");

    const [totalItems, setTotalItems] = useState(0);
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
            const endpoint = 'http://localhost:5000/api';
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
            setTotalItems(data.getAsets.length);
        }
        getAsets();
    }, [])

    return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 overflow-y-auto">
                {currentData &&
                    currentData.map((aset) => {
                        return(
                            <div className="bg-white p-10 border rounded-lg flex flex-col lg:flex-row gap-6 relative overflow-hidden" key={aset.id}>
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-semibold text-grey-900 capitalize">
                                        {aset.nama}
                                    </h3>
                                    <p className="text-red-600 text-xl font-semibold">Rp. {aset.price}</p>
                                    <p>Stock: {aset.stock}</p>
                                </div>
                                    
                                    
                                    <div className="lg:ms-auto">
                                        <Link className="px-4 py-2 ease-linear duration-200 bg-yellow-300 hover:bg-yellow-400 rounded font-semibold text-center" href={`/admin/edit/${aset.slug}`}>
                                        <FontAwesomeIcon icon={faPenSquare} />
                                            <span className="ms-2 hidden">EDIT</span>
                                        </Link>
                                    </div>
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

export default ListAset;
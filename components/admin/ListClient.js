import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPenSquare, faPrint, faTrashAlt, faUndo } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination";
import html2canvas from "html2canvas";

const ListClient = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 5;

    const [asets, setAsets] = useState("");
    const [selectedAset, setSelectedAset] = useState(null);

    const [totalItems, setTotalItems] = useState(0);
    const totalPages = Math.ceil(totalItems / itemPerPage);
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentData = asets.slice(startIndex, endIndex);

    const [counter, setCounter] = useState(0);
    const [tanggal, setTanggal] = useState("");

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDetail = (aset) => {
        setSelectedAset(aset);
    }

    const handleCloseOverlay = () => {
        setSelectedAset(null);
      };

    const renderElementToImage = (element) => {
        html2canvas(element).then(canvas => {
            const dataURL = canvas.toDataURL('image/png');

            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = 'nota.png';
            downloadLink.click();
        })
    }

    const handlePrint = () => {
        const elementToRender = document.getElementById('eRender');
        renderElementToImage(elementToRender);
    }

    const handleDone = async (id) => {
            const endpoint = process.env.API_ENDPOINT;
            const mutation = `
                mutation resolved($id: ID!) {
                    resolved(id: $id) {
                        done
                    }
                }
            `;
            const variabels = { id: id };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            console.log(data.resolved);
            setCounter(prevCounter => prevCounter + 1);
    }

    const tanggalSekarang = () => {
        let date = new Date();
        let tahun = date.getFullYear();
        let tgl = date.getDate();
        let bulan = date.getMonth();
        let hari = date.getDay();

        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum'at"; break;
            case 6: hari = "Sabtu"; break;
        }

        switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }

        return(`${hari}, ${tgl} ${bulan} ${tahun} `);
    }


    useEffect(() => {
        async function getAsets() {
            const endpoint = process.env.API_ENDPOINT;
            const query = `
                query {
                    getRents {
                        id
                        nama
                        identitas
                        nomor
                        alamat
                        wa
                        aset
                        jumlah
                        keperluan
                        kenalan
                        tglPinjam
                        tglKembali
                        note
                        done
                    }
                }
            `;
            const client = new GraphQLClient(endpoint);
            const data = await client.request(query);
            setAsets(data.getRents);
            setTotalItems(data.getRents.length);
        }
        getAsets();
        const tglNow = tanggalSekarang();
        setTanggal(tglNow);
    }, [counter])

    return (
            <div className="flex flex-col w-full">
                <div className="my-3 w-full flex flex-col">
                <h2 className="text-2xl my-5 font-bold">LIST PEMINJAM ASET</h2>
                <table className="table-fixed rounded overflow-hidden shadow">
                    <thead>
                        <tr className="bg-gray-600 text-white">
                            <th className="p-4">Nama Peminjam</th>
                            <th className="p-4">Tanggal Pinjam</th>
                            <th className="p-4">Barang Dipinjam</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentData ?
                        currentData
                        .filter(aset => aset.done === false)
                        .map((aset) => {
                            return(
                                <tr key={aset.id} className="bg-white">
                                    <td className="p-4 capitalize font-semibold">{aset.nama} ({aset.wa})</td>
                                    <td className="p-4">{aset.tglPinjam}</td>
                                    <td className="p-4">{aset.aset}</td>
                                    <td className="p-4 flex gap-3 items-center justify-end">
                                        <button onClick={() => handleDetail(aset)} className="bg-yellow-300 hover:bg-yellow-400 px-8 py-1 rounded-full">Detail</button>
                                        <button onClick={() => handleDone(aset.id)} className="bg-blue-400 hover:bg-blue-500 w-8 h-8 text-white rounded-full"><FontAwesomeIcon icon={faCheck} /></button></td>
                                </tr>
                            )
                        }) : null
                    }
                    </tbody>
                </table>
                {totalItems <= itemPerPage ? (<></>) : (<Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />)}
                </div>
                <div className="my-3 w-full flex flex-col">
                <h2 className="text-2xl my-5 font-bold">HISTORI PEMINJAM ASET</h2>
                <table className="md:table-fixed table-auto rounded overflow-hidden shadow">
                    <thead>
                        <tr className="bg-gray-600 text-white">
                            <th className="p-4">Nama Peminjam</th>
                            <th className="p-4">Tanggal Pinjam</th>
                            <th className="p-4">Barang Dipinjam</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {currentData ?
                        currentData
                        .filter(aset => aset.done === true)
                        .map((aset) => {
                            return(
                                <tr key={aset.id} className="bg-white">
                                    <td className="p-4 capitalize font-semibold">{aset.nama} ({aset.wa})</td>
                                    <td className="p-4">{aset.tglPinjam}</td>
                                    <td className="p-4">{aset.aset}</td>
                                    <td className="p-4 flex gap-3 items-center justify-end"><button onClick={() => handleDetail(aset)} className="bg-yellow-300 hover:bg-yellow-400 px-8 py-1 rounded-full">Detail</button>
                                    <button onClick={() => handleDone(aset.id)} className="bg-gray-600 hover:bg-gray-500 w-8 h-8 text-white rounded-full"><FontAwesomeIcon icon={faUndo} /></button>
                                    <button className="bg-red-600 hover:bg-red-500 w-8 h-8 text-white rounded-full"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            )
                        }) : null
                    }
                    </tbody>
                </table>
                </div>
                {selectedAset && (
                        <div className="flex justify-center items-center">
                            <div onClick={handleCloseOverlay} className="bg-black w-full h-full fixed opacity-20 top-0 left-0 z-20 "></div>
                        <div className="absolute bg-gray-100 px-8 py-16 z-30 h-4/5 mt-10 rounded top-0">
                            <div className="absolute top-3 right-3 flex justify-end">
                            <button className="bg-red-500 text-white h-8 w-8 rounded-full font-bold" onClick={handleCloseOverlay}>X</button>
                            </div>
                            <div className="overflow-y-scroll h-full p-3">
                                <div id="eRender" className="bg-white px-12 py-10">
                                    <div className="flex flex-col items-center py-6">
                                        <h1 className="text-2xl font-bold py-2">ASET PERSA</h1>
                                        <p>Sambirejo, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</p>
                                    </div>
                                    <hr></hr>
                                    <table className="table-fixed my-3">
                                        <tbody>
                                            <tr>
                                                <td className="p-3">Nama</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.nama}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Alamat</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.alamat}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">No. WA</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.wa}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Barang yang Dipinjam</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.aset}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Tanggal Pinjam</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.tglPinjam}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Rencana Pengembalian</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.tglKembali}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Jaminan</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.identitas}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Note</td>
                                                <td className="p-3">:</td>
                                                <td className="p-3">{selectedAset.note}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr></hr>
                                    <div className="flex flex-col gap-5 my-3 p-3">
                                        <div>
                                            <p>Dengan meminjam aset ini saya menyetujui:</p>
                                            <ol className="ps-5 list-decimal">
                                                <li>Bertanggungjawab penuh jika terjadi kerusakan saat pemakaian</li>
                                                <li>Mengembalikan tepat waktu</li>
                                                <li>Membayar biaya sewa sesuai kesepakatan</li>
                                            </ol>
                                        </div>
                                        <div className="ms-auto gap-8 flex flex-col items-center justify-center">
                                            <p>{tanggal}</p>
                                            <p>ADMIN ASET PERSA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="absolute bottom-3 right-10 bg-yellow-300 px-6 py-2 rounded-full" onClick={handlePrint}><FontAwesomeIcon icon={faPrint} />Print</button>
                        </div>
                        </div>
                    )}
            </div>
    )
}

export default ListClient;
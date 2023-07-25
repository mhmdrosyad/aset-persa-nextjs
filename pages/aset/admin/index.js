import ListAset from "@/components/admin/ListAset";
import Head from "next/head";

const AdminPage = () => {
    const username = sessionStorage.getItem('username');
    return (
        <>
        <Head><title>Halaman Admin - ASET PERSA</title></Head>
        <div className="p-8 mt-4 bg-white rounded-lg shadow">
            <h2 className="text-3xl font-bold capitalize mb-2">Hello, <span>{username}</span></h2>
            <p>Semangat! Kita penenang bukan pemenang...</p>
        </div>
        <div className="flex flex-col justify-center bg-white rounded-lg p-12 mt-5 shadow">
        <h1 className="text-3xl font-bold relative">List Aset Kita<span className="absolute -bottom-3 left-0 w-10 h-0.5 rounded bg-gray-600"></span></h1>
            <ListAset />
        </div>
        </>
    )
}

export default AdminPage;
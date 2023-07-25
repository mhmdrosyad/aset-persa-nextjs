import ListClient from "@/components/admin/ListClient";
import Head from "next/head";

const ClientPage = () => {
    return (
        <>
        <div className="flex flex-col justify-center m-4 mt-12">
        <Head><title>Peminjam</title></Head>
            <ListClient />
        </div>
        </>
    )
}

export default ClientPage;
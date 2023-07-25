import ListAset from "@/components/admin/ListAset";
import Head from "next/head";

const AsetPage = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center m-4 bg-white rounded-lg p-12 mt-12 shadow">
        <Head><title>Aset Kita</title></Head>
        <h1 className="text-2xl font-bold">LIST ASET KITA</h1>
            <ListAset />
        </div>
        </>
    )
}

export default AsetPage;
import ListAset from "@/components/admin/ListAset";
import Head from "next/head";

const AsetPage = () => {
    return (
        <>
        <div className="flex flex-col justify-center m-4 rounded-lg mt-12">
        <Head><title>Aset Kita</title></Head>
        <h1 className="text-2xl font-bold">LIST ASET KITA</h1>
            <ListAset />
        </div>
        </>
    )
}

export default AsetPage;
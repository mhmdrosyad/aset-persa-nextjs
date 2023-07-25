import BorrowAset from "@/components/aset/BorrowAset";
import Head from "next/head";

const Add = () => {
    return (
        <>
            <Head>
                <title>Pinjam Aset</title>
            </Head>
            
            <div className="flex flex-col items-center justify-center m-4">
                <BorrowAset />
            </div>
        </>
    )
}

export default Add;
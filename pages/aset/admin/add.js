import AddAsetForm from "@/components/aset/AddAsetForm";
import Head from "next/head";

const Add = () => {
    return (
        <>
            <Head>
                <title>Tambah Aset</title>
            </Head>
            
            <div className="flex flex-col items-center justify-center m-4">
                <AddAsetForm />
            </div>
        </>
    )
}

export default Add;
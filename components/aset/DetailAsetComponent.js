import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const DetailAsetComponent = (props) => {
    const { aset } = props;
    return (
        <>
            <div className="w-full flex flex-col gap-6 my-6 items-center md:items-stretch">
                <Image className='mt-3 w-full h-48 object-cover object-center' src={aset.urlImg} width={500} height={500} alt={aset.nama} />
                <div className="ms-4 flex flex-col w-full gap-2">
                    <h1 className="text-3xl font-semibold capitalize">{aset.nama}</h1>
                    <span className="text-2xl py-1 text-red-500 font-semibold">Rp. {aset.price}</span>
                    <p className="py-3 text-neutral-500">{aset.note}</p>
                    <a href={`https://api.whatsapp.com/send?phone=6285700149399&text=Misi%20mas%2C%0ASaya%20mau%20pinjam%20*${aset.nama}*%20%F0%9F%98%83`} className="flex mt-4 items-center w-32 justify-center bg-yellow-300 rounded p-2 text-center font-semibold" target="_blank">
                    <FontAwesomeIcon className="me-2" icon={faFileSignature} /> PINJAM</a>
                </div>
            </div>
        </>
    )
}

export default DetailAsetComponent;
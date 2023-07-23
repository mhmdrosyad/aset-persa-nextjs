import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHome, faPlusSquare, faToolbox, faFileSignature, faUsers, faBars, faSignOutAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import AuthContext from "@/utils/AuthContext";
import { useRouter } from "next/router";

const AdminHeader = () => {
    const router = useRouter();
    const { logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const backto = () => {
        router.push('/');
    }
    return (
        <>
            <div className="hidden lg:flex">
                    <div className="bg-white fixed h-full z-20 py-6 px-16 shadow-sm flex flex-col">
                        <div className="flex items-center gap-6 mb-12">
                            <Link href="/admin" className="me-1 flex items-center">
                            <FontAwesomeIcon className="me-2 text-yellow-400" icon={faBolt} size="lg"/>
                                <h1 className="font-semibold text-xl">ADMIN ASET PERSA</h1>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-8 text-gray-500">
                            <Link className="font-semibold flex gap-4 items-center" href='/admin'><FontAwesomeIcon className="w-6 h-6" icon={faHome} />Home</Link>
                            <Link className="font-semibold flex gap-4" href='/admin/our-aset'><FontAwesomeIcon className="w-6 h-6" icon={faToolbox} />List Aset</Link>
                            <Link className="font-semibold flex gap-4" href='/admin/add'><FontAwesomeIcon className="w-6 h-6" icon={faPlusSquare} />Tambah Aset</Link>
                            <Link className="font-semibold flex gap-4" href='/admin/pinjam'><FontAwesomeIcon className="w-6 h-6" icon={faFileSignature} />Pinjam Aset</Link>
                            <Link className="font-semibold flex gap-4" href='/admin/peminjam'><FontAwesomeIcon className="w-6 h-6" icon={faUsers} />Daftar Peminjam</Link>
                        </div>
                        <button onClick={backto} className="font-semibold mt-auto flex gap-2 items-center"><FontAwesomeIcon icon={faExternalLinkAlt} />Web Aset</button>
                        <button onClick={logout} className="font-semibold mt-3 flex gap-2 items-center text-red-600"><FontAwesomeIcon icon={faSignOutAlt} />Logout</button>
                    </div>
                </div>
            {isMenuOpen && (
                <div className="lg:hidden w-full h-full fixed left-0 top-0 z-20">
                    <div onClick={handleToogleMenu} className="bg-black w-full h-full fixed top-0 left-0 z-10 opacity-50" />
                    <div className="bg-white fixed h-full z-20 py-6 px-10 flex flex-col">
                        <div className="flex items-center gap-6 mb-8">
                            <Link href="/admin" className="me-1 flex items-center">
                            <FontAwesomeIcon className="me-2 text-yellow-400" icon={faBolt} size="lg"/>
                                <h1 className="font-semibold text-xl">ADMIN ASET PERSA</h1>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 text-gray-500">
                            <Link className="font-semibold flex gap-4 items-center" href='/admin'><FontAwesomeIcon className="w-6 h-6" icon={faHome} />Home</Link>
                            <Link className="font-semibold flex gap-4" href='/admin'><FontAwesomeIcon className="w-6 h-6" icon={faToolbox} />List Aset</Link>
                            <Link className="font-semibold flex gap-4" href='/admin/add'><FontAwesomeIcon className="w-6 h-6" icon={faPlusSquare} />Tambah Aset</Link>
                            <Link className="font-semibold flex gap-4" href='/admin'><FontAwesomeIcon className="w-6 h-6" icon={faFileSignature} />Pinjam Aset</Link>
                        </div>
                        <button onClick={backto} className="font-semibold mt-auto flex gap-2 items-center"><FontAwesomeIcon icon={faExternalLinkAlt} />Web Aset</button>
                        <button onClick={logout} className="font-semibold mt-3 flex gap-2 items-center text-red-600"><FontAwesomeIcon icon={faSignOutAlt} />Logout</button>
                    </div>
                </div>
            )}
            <div className="lg:hidden z-10 fixed bottom-0 w-full py-5 px-2 bg-white rounded-t-lg">
                <div className="flex gap-16 items-center justify-center text-xl">
                    <Link href='/admin'><FontAwesomeIcon size='lg' icon={faHome} /></Link>
                    <Link href='/admin'><FontAwesomeIcon size='lg' icon={faToolbox} /></Link>
                    <button onClick={handleToogleMenu} className='bg-red-600 text-white rounded-full px-3 py-2 absolute -top-5 border-4 border-neutral-100'><FontAwesomeIcon size='lg' icon={faBars} /></button>
                    <Link href='/admin/add'><FontAwesomeIcon size='lg' icon={faPlusSquare} /></Link>
                    <Link href='/admin'><FontAwesomeIcon size='lg' icon={faFileSignature} /></Link>
                </div>
            </div>
        </>
    )
}

export default AdminHeader;
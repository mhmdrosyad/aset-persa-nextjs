import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import Message from "./Message";
import { useState } from "react";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";

const InfoWrapper = (props) => {
    const { status } = props;

    if(status !== null) {
        if(status === false) {
            return <Message type="error" text="Judul atau nama aset tidak boleh kosong" />;
        }
        return <Message type="success" text="Data berhasil ditambahkan" />;
    }
    return <></>;
}

const BorrowAset = () => {
    const [isSuccess, setIsSuccess] = useState(null);

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            nama: '',
            identitas: '',
            nomor: '',
            alamat: '',
            wa: '',
            aset: '',
            jumlah: 0,
            keperluan: '',
            kenalan: '',
            tglPinjam: '',
            tglKembali: '',
            note: ''
        },
        validate: (values) => {
            const errors = {};

            if(!values.nama) {
                errors.nama = 'Nama harus diisi';
            }

            if(!values.alamat) {
                errors.alamat = 'Alamat peminjam harus diisi';
            }

            if(!values.keperluan) {
                errors.keperluan = 'Keperluan sewa harus diisi';
            }

            return errors;
        },
        onSubmit: async (values) => {
            const endpoint = 'http://localhost:5000/api';
            const mutation = `
                mutation NewRent($nama: String!, $identitas: String!, $nomor: String!, $alamat: String!, $wa: String!, $aset: String!, $jumlah: Int!, $keperluan: String!, $kenalan: String!, $tglPinjam: String!, $tglKembali: String!, $note: String!, $done: Boolean!) {
                    newRent(input:{nama: $nama, identitas: $identitas, nomor: $nomor, alamat: $alamat, wa: $wa, aset: $aset, jumlah: $jumlah, keperluan: $keperluan, kenalan: $kenalan, tglPinjam: $tglPinjam, tglKembali: $tglKembali, note: $note, done: $done}) {
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
            const variabels = { nama: values.nama, identitas: values.identitas, nomor: values.nomor, alamat: values.alamat, wa: values.wa, aset: values.aset, jumlah: values.jumlah, keperluan: values.keperluan, kenalan: values.kenalan, tglPinjam: values.tglPinjam, tglKembali: values.tglKembali, note: values.note, done: false };
            const client = new GraphQLClient(endpoint);
            const data = await client.request(mutation, variabels);
            console.log('New Rent Added: ', data.newRent);
            setIsSuccess(true);
            router.push('/admin');
        }
    })

    return (
        <>
            <InfoWrapper status={isSuccess} />
            <form className="flex flex-col w-4/5 bg-white px-12 py-6 rounded-lg shadow-sm" onSubmit={formik.handleSubmit}>
                <h1 className="relative mb-3 text-2xl font-bold text-center">
                    PINJAM ASET
                </h1>
                <div className="flex flex-col">
                    <div className="flex flex-col my-3">
                        <div>Nama Peminjam<span className="font-semibold text-red-600"> *</span></div>
                        <input
                            className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                            type="text"
                            name="nama"
                            placeholder="Ex. Paidi"
                            onChange={formik.handleChange}
                            value={formik.values.nama}
                        ></input>
                        {formik.errors.nama && <div className="text-red-600 text-xs">{formik.errors.nama}</div>}
                    </div>
                    <div className="flex flex-col my-3">
                        <div>Identitas Peminjam</div>
                        <div className="flex">
                            <select onChange={formik.handleChange}
                        value={formik.values.identitas} name="identitas" className="me-3 my-3 p-3 bg-neutral-100 font-semibold focus:outline-none focus:ring focus:border-blue-300">
                                <option value="" disabled>Pilih identitas</option>
                                <option value="ktp">KTP</option>
                                <option value="ktm">KTM</option>
                                <option value="kk">KK</option>
                                <option value="other">OTHER</option>
                            </select>
                            <input
                                className="my-3 p-3 bg-neutral-100 font-semibold flex-1 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                name="nomor"
                                placeholder="Ex. 340XXXXXXX"
                                onChange={formik.handleChange}
                                value={formik.values.nomor}
                            ></input>
                        </div>
                    </div>

                    <div className="flex flex-col my-3">
                        <div>Alamat Peminjam <span className="font-semibold text-red-600"> *</span></div>
                    <textarea
                        className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                        name="alamat"
                        placeholder="Ex. Sambirejo, Wedomartani, Ngemplak"
                        onChange={formik.handleChange}
                        value={formik.values.alamat}
                    ></textarea>
                    {formik.errors.alamat && <div className="text-red-600 text-xs">{formik.errors.alamat}</div>}
                    </div>
                    
                    <div className="flex flex-col my-3">
                        <div>No. WA Peminjam<span className="font-semibold text-red-600"> *</span></div>
                        <input
                            className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                            type="text"
                            name="wa"
                            placeholder="Ex. 085700XXXXX"
                            onChange={formik.handleChange}
                            value={formik.values.wa}
                        ></input>
                        {formik.errors.nama && <div className="text-red-600 text-xs">{formik.errors.nama}</div>}
                    </div>

                    <div className="flex flex-col my-3">
                        <div className="flex items-center">
                            <div className="flex flex-col me-3 flex-1">
                                <div>Alat yang Dipinjam <span className="font-semibold text-red-600"> *</span></div>
                                <select onChange={formik.handleChange}
                        value={formik.values.aset} name="aset" className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300">
                                    <option value="" disabled>Alat yang dipinjam</option>
                                    <option value="kain hitam">Kain Hitam</option>
                                    <option value="lampu sorot">Lampu Sorot</option>
                                    <option value="roll">Roll Kabel</option>
                                    <option value="hand tacker">Handtacker</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                            <div>Jumlah <span className="font-semibold text-red-600"> *</span></div>
                                <input
                                    className="my-3 p-3 bg-neutral-100 font-semibold focus:outline-none focus:ring focus:border-blue-300"
                                    type="number"
                                    name="jumlah"
                                    onChange={formik.handleChange}
                                    value={formik.values.jumlah}
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col my-3">
                        <div>Keperluan Sewa<span className="font-semibold text-red-600"> *</span></div>
                        <input
                            className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                            type="text"
                            name="keperluan"
                            placeholder="Ex. Event Sekolah"
                            onChange={formik.handleChange}
                            value={formik.values.keperluan}
                        ></input>
                        {formik.errors.keperluan && <div className="text-red-600 text-xs">{formik.errors.keperluan}</div>}
                    </div>

                    <div className="flex flex-col my-3">
                        <div>Kenalan PERSA (jika ada)</div>
                        <input
                            className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                            type="text"
                            name="kenalan"
                            placeholder="Ex. Kancane Rosyad"
                            onChange={formik.handleChange}
                            value={formik.values.kenalan}
                        ></input>
                    </div>
                    <div className="flex my-3">
                        <div className="flex flex-col me-3 flex-1">
                            <div>Tanggal Pinjam <span className="font-semibold text-red-600"> *</span></div>
                            <input
                                className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                                type="date"
                                name="tglPinjam"
                                onChange={formik.handleChange}
                                value={formik.values.tglPinjam}
                            ></input>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div>Tanggal Kembali<span className="font-semibold text-red-600"> *</span></div>
                            <input
                                className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                                type="date"
                                name="tglKembali"
                                onChange={formik.handleChange}
                                value={formik.values.tglKembali}
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 my-3">
                        <span>Keterangan Tambahan</span>
                        <textarea
                            className="my-3 p-3 bg-neutral-100 font-semibold w-full focus:outline-none focus:ring focus:border-blue-300"
                            name="note"
                            placeholder="keterangan tambahan"
                            onChange={formik.handleChange}
                            value={formik.values.note}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-yellow-300 text-base p-3 rounded-md" type="submit">
                        <FontAwesomeIcon icon={faSave} /> &nbsp; PINJAM
                    </button>
                </div>
            </form>
        </>
    )
}

export default BorrowAset;
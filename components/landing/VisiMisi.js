
import Image from "next/image";

const VisiMisi = () => {
    return(
        <div className="w-full h-fit py-8 bg-neutral-700">
            <div className="max-w-7xl mx-auto md:px-8 py-8 flex flex-col gap-3 items-center justify-center">
            <Image className="h-16 w-16 md:h-fit w-fit" src="/eyeglasses.svg" alt="Ketua PERSA" width={104} height={104} />
                <h3 className="md:text-3xl text-center font-bold">VISI MISI PERSA</h3>
                <div className="w-full py-3 px-12 lg:px-0">
                    <h3 className="font-semibold text-xl">VISI</h3>
                    <p>Menjadi organisasi pemuda yang berkualitas, kreatif, berdampak positif bagi masyarakat, dan berkontribusi membangun kesejahteraan bangsa.</p>
                </div>
                <div className="w-full py-3 px-12 lg:px-0 pb-12">
                    <h3 className="font-semibold text-xl">MISI</h3>
                    <ol className="list-decimal ps-5 mt-3 text-justify">
                        <li>Meningkatkan kualitas diri anggota Karang Taruna dalam bidang kepemimpinan, keterampilan, dan pengetahuan</li>
                        <li>Mengembangkan program-program pengabdian masyarakat yang bermanfaat dan berkelanjutan</li>
                        <li>Membangun jejaring dan kerjasama dengan berbagai pihak untuk memperluas akses dan dukungan terhadap program Karang Taruna</li>
                        <li>Mewujudkan budaya partisipasi dan gotong royong di masyarakat melalui kegiatan Karang Taruna</li>
                        <li>Memperkuat identitas dan citra Karang Taruna sebagai organisasi yang peduli dan berperan aktif dalam memajukan masyarakat</li>
                        <li>Menggunakan teknologi untuk memperkuat jejaring dan kerjasama antara Karang Taruna dengan berbagai pihak, seperti media sosial, platform digital, dan sebagainya.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi;
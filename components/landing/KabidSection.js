import { useEffect, useRef } from 'react';
import Image from "next/image";

const CardKabid = ({ src, bidang, nama, delay }) => {

    const animatedElementRef = useRef(null)

    useEffect(() => {
        const animatedElement = animatedElementRef.current;
        const handleScroll = () => {
            const elementTop = animatedElement.getBoundingClientRect().top;
            const elementBottom = animatedElement.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;
      
            // Tambahkan kelas animasi saat elemen masuk ke dalam viewport
            if (elementTop < viewportHeight) {
              animatedElement.classList.add('animate__animated', 'animate__fadeIn');
            } else {
              animatedElement.classList.remove('animate__animated', 'animate__fadeIn');
            }
          };
      
          // Tambahkan event listener pada scroll
          window.addEventListener('scroll', handleScroll);
      
          // Bersihkan event listener saat komponen unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])

    return (
        <div ref={animatedElementRef} style={{ animationDelay: `${delay}ms` }} className="animated-element text-center flex flex-col py-3 items-center gap-1 opacity-0">
                <Image src={src} alt={nama} className="p-1 border border-yellow-400 h-24 w-24 mb-2 object-cover rounded-full" height={80} width={80}/>
                <h3 className='font-bold'>{nama}</h3>
                <p>{bidang}</p>
        </div>
    )
}

const KabidSection = () => {
    return(
        <div className="py-12 pb-32">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 p-12 md:px-8">
            <Image className="h-16 w-16 md:h-fit w-fit" src="/work.svg" alt="Ketua PERSA" width={88} height={95} />
                <h2 className="text-center md:text-3xl font-bold">KETUA BIDANG KERJA <span className="text-yellow-400">PERSA</span></h2>
                <p className='text-center'>Di bawah ketua umum terdapat 5 ketua bidang dengan fokus berbeda-beda.</p>
                <div className="grid lg:grid-cols-5 gap-6">
                    <CardKabid delay={0} src="/img/julang.JPG" bidang="Pengembangan Sumberdaya Manusia" nama="Julang Angkoso" />
                    <CardKabid delay={100} src="/img/qila.JPG" bidang="Kreasi Masyarakat" nama="Aqila Janitra" />
                    <CardKabid delay={150} src="/img/tama.JPG" bidang="Aset dan Infrastruktur" nama="Khodri A. Pratama" />
                    <CardKabid delay={200} src="/img/feri.JPG" bidang="Publikasi Dokumentasi dan Jaringan" nama="Fery Irawan" />
                    <CardKabid delay={250} src="/img/nana.JPG" bidang="Sosial dan Pemberdayaan Masyarakat" nama="Syafana Marditya" />
                </div>
            </div>
        </div>
    )
}

export default KabidSection;
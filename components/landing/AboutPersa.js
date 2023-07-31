import Image from "next/image";
import { useEffect, useRef } from "react";

const AboutPersa = () => {
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
        <div className="w-full bg-neutral-700 h-fit py-20">
            <div className="max-w-7xl mx-auto md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="max-w-full min-w-max">
                    <Image ref={animatedElementRef} className="animated-element" alt="About PERSA" src="/img/logo-persa.png" width={268} height={288} />
                    </div>
                <div className="flex flex-col gap-3 px-12 lg:px-0 lg:ms-12">
                    <h3 className="text-center lg:text-left text-3xl font-bold">PERSA SAMBIREJO</h3>
                    <p className="text-justify">PERSA merupakan singkatan dari PERSATUAN REMAJA SAMBIREJO adalah karang taruna yang sudah berdiri sejak tahun 1975. Sekretariat PERSA berada di dusun Sambirejo Karanganyar RW 47, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta.</p>
                    <p className="text-justify">Sebagai organisasi yang bergerak di bidang sosial dan masyarakat, PERSA berupaya untuk mencetak generasi muda yang kreatif, inovatif, semangat gotong royong, berakhlak mulia serta pekerti luhur, dengan tetap menjaga dan melestarikan budaya khususnya yang ada di dusun Sambirejo.</p>
                    <p className="text-justify">PERSA Sambirejo selalu berinovasi mengikuti perkembangan zaman dan mencoba menciptakan sesuatu yang beda, sesuatu yang baru, dan menciptakan sejarah untuk generasi selanjutnya.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPersa;
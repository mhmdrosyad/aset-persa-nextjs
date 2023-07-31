import Image from "next/image";
import { useEffect, useRef } from "react";

const LeaderSection = () => {
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const animatedElement = animatedElementRef.current;
        const handleScroll = () => {
            const elementTop = animatedElement.getBoundingClientRect().top;
            const elementBottom = animatedElement.getBoundingClientRect().bottom;
            const viewportHeight = window.innerHeight;
      
            // Tambahkan kelas animasi saat elemen masuk ke dalam viewport
            if (elementTop < viewportHeight) {
              animatedElement.classList.add('animate__animated', 'animate__fadeInUp');
            } else {
              animatedElement.classList.remove('animate__animated', 'animate__fadeInUp');
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
        <div className="w-full bg-neutral-700 h-fit pt-8 overflow-y-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center">
                  <Image className="h-16 w-16 md:h-fit w-fit" src="/crown.svg" alt="Ketua PERSA" width={128} height={128} />
                </div>
                <h2 className="px-12 md:px-0 md:text-3xl mb-8 text-center font-bold">Ketua dan Wakil Ketua <span className="text-yellow-400">PERSA 2023 - 2025</span></h2>
                <Image ref={animatedElementRef} className="translate-y-full animated-element" alt="Ketua dan Wakil PERSA" src="/img/ketua.png" width={1440} height={448} />
            </div>
        </div>
    )
}

export default LeaderSection;
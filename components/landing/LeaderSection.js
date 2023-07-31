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
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115.1 35.8C109.2 35.9 104.3 41.1 104.6 47C104.7 50.3 106.3 53.1 108.7 55C96.3004 71.6 83.7004 72.9 69.1004 45.4C74.3004 42.8 77.2004 36.2 73.4004 29.6C71.6004 26.4 67.9004 24.8 64.2004 25C64.1004 25 64.1004 25 64.0004 25C64.0004 25 63.9004 25 63.8004 25C60.1004 24.9 56.5004 26.4 54.6004 29.6C50.8004 36.2 53.7004 42.8 58.9004 45.4C44.3004 72.9 31.7004 71.6 19.3004 55C21.7004 53.1 23.3004 50.2 23.4004 47C23.6004 41.1 18.8004 35.9 12.9004 35.8C6.80039 35.7 1.90039 40.5 1.90039 46.6C1.90039 52.5 6.70039 57.4 12.7004 57.4C13.1004 57.4 13.6004 57.4 14.0004 57.3L18.1004 97.5C18.4004 100.7 21.1004 103.1 24.3004 103.1H64.0004H103.7C106.9 103.1 109.6 100.7 109.9 97.5L114 57.3C114.4 57.4 114.8 57.4 115.3 57.4C121.2 57.4 126.1 52.6 126.1 46.6C126.1 40.5 121.1 35.7 115.1 35.8Z" fill="#FACC15"/>
                  </svg>
                </div>
                <h2 className="md:text-3xl mb-8 text-center font-bold">Ketua dan Wakil Ketua <span className="text-yellow-400">PERSA 2023 - 2025</span></h2>
                <Image ref={animatedElementRef} className="translate-y-full animated-element" alt="Ketua dan Wakil PERSA" src="/img/ketua.png" width={1440} height={448} />
            </div>
        </div>
    )
}

export default LeaderSection;
import { useEffect, useRef } from 'react';
import Image from "next/image";

const CardPenasihat = ({ src, nama }) => {

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
        <div ref={animatedElementRef} className="animated-element text-center flex flex-col py-3 items-center gap-1 opacity-0">
                <Image src={src} alt={nama} className="p-1 border border-yellow-400 h-24 w-24 mb-2 object-cover rounded-full" height={80} width={80}/>
                <h3 className='font-bold'>{nama}</h3>
        </div>
    )
}

const PenasihatSection = () => {
    return(
        <div className="py-12 pb-32">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:px-8">
            <Image className="h-16 w-16 md:h-fit w-fit" src="/users.svg" alt="Ketua PERSA" width={84} height={64} />
                <h2 className="md:text-3xl font-bold">PENASIHAT <span className="text-yellow-400">PERSA</span></h2>
                <div className="grid lg:grid-cols-7 gap-6">
                    <CardPenasihat src="/img/novi.JPG" nama="Nurmawan Novi" />
                    <CardPenasihat src="/img/sibon.JPG" nama="Sunyoto (Bonyot)" />
                    <CardPenasihat src="/img/joni.JPG" nama="Joni Setiawan" />
                    <CardPenasihat src="/img/toro.JPG" nama="Ahmat Giantoro" />
                    <CardPenasihat src="/img/tri.JPG" nama="Tri Widodo" />
                    <CardPenasihat src="/img/heri.jpg" nama="Hery Wahyu" />
                    <CardPenasihat src="/img/nur.jpg" nama="Nur Cahyo" />
                </div>
            </div>
        </div>
    )
}

export default PenasihatSection;
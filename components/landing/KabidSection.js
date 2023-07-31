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
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:px-8">
            <svg width="88" height="95" viewBox="0 0 88 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1025_141)">
                <path d="M21.6102 5.31398e-06H65.7802C67.0168 -0.0013088 68.2415 0.241118 69.3843 0.713427C70.5271 1.18574 71.5657 1.87866 72.4405 2.75259C73.3154 3.62652 74.0094 4.66432 74.4829 5.80664C74.9565 6.94897 75.2002 8.17342 75.2002 9.41001V31.59C75.2002 32.8266 74.9565 34.051 74.4829 35.1934C74.0094 36.3357 73.3154 37.3735 72.4405 38.2474C71.5657 39.1213 70.5271 39.8143 69.3843 40.2866C68.2415 40.7589 67.0168 41.0013 65.7802 41H21.6102C19.1145 41 16.721 40.0086 14.9563 38.2439C13.1916 36.4792 12.2002 34.0857 12.2002 31.59V9.41001C12.2002 6.91432 13.1916 4.52085 14.9563 2.75613C16.721 0.991413 19.1145 5.31398e-06 21.6102 5.31398e-06Z" fill="#0066CC"/>
                <path d="M41.2 47V38H47.2V47H72.06C72.8928 47 73.6914 47.3308 74.2803 47.9197C74.8692 48.5085 75.2 49.3072 75.2 50.14V56.52C73.2357 56.0579 71.2118 55.9028 69.2 56.06V53H18.2V56.06C16.1882 55.9023 14.1642 56.0575 12.2 56.52V50.14C12.1987 49.7273 12.279 49.3184 12.4363 48.9368C12.5937 48.5553 12.8249 48.2086 13.1167 47.9167C13.4086 47.6249 13.7553 47.3937 14.1368 47.2363C14.5184 47.079 14.9273 46.9987 15.34 47H41.2ZM17.26 59.66C20.6737 59.66 24.0107 60.6723 26.8491 62.5688C29.6875 64.4654 31.8998 67.161 33.2062 70.3149C34.5125 73.4687 34.8543 76.9391 34.1884 80.2873C33.5224 83.6354 31.8785 86.7108 29.4647 89.1247C27.0508 91.5385 23.9754 93.1824 20.6273 93.8484C17.2791 94.5143 13.8087 94.1725 10.6549 92.8662C7.50103 91.5598 4.80539 89.3475 2.90883 86.5091C1.01228 83.6707 0 80.3337 0 76.92C0 72.3424 1.81846 67.9522 5.05534 64.7153C8.29222 61.4785 12.6824 59.66 17.26 59.66ZM17.26 65.94C15.0844 65.94 12.9577 66.5851 11.1487 67.7938C9.33979 69.0025 7.92989 70.7205 7.09733 72.7305C6.26476 74.7405 6.04692 76.9522 6.47136 79.086C6.8958 81.2198 7.94345 83.1798 9.48183 84.7182C11.0202 86.2566 12.9802 87.3042 15.114 87.7286C17.2478 88.1531 19.4595 87.9352 21.4695 87.1027C23.4795 86.2701 25.1975 84.8602 26.4062 83.0513C27.6149 81.2423 28.26 79.1156 28.26 76.94C28.26 74.0226 27.1011 71.2247 25.0382 69.1618C22.9753 67.0989 20.1774 65.94 17.26 65.94ZM70.61 59.66C74.0237 59.66 77.3607 60.6723 80.1991 62.5688C83.0375 64.4654 85.2498 67.161 86.5562 70.3149C87.8625 73.4687 88.2043 76.9391 87.5384 80.2873C86.8724 83.6354 85.2285 86.7108 82.8147 89.1247C80.4008 91.5385 77.3254 93.1824 73.9773 93.8484C70.6291 94.5143 67.1587 94.1725 64.0049 92.8662C60.851 91.5598 58.1554 89.3475 56.2588 86.5091C54.3623 83.6707 53.35 80.3337 53.35 76.92C53.3487 74.653 53.7942 72.408 54.6612 70.3133C55.5281 68.2187 56.7994 66.3154 58.4024 64.7124C60.0054 63.1094 61.9087 61.8381 64.0033 60.9712C66.098 60.1042 68.343 59.6587 70.61 59.66ZM70.61 65.94C68.4344 65.94 66.3077 66.5851 64.4987 67.7938C62.6898 69.0025 61.2799 70.7205 60.4473 72.7305C59.6148 74.7405 59.3969 76.9522 59.8214 79.086C60.2458 81.2198 61.2934 83.1798 62.8318 84.7182C64.3702 86.2566 66.3302 87.3042 68.464 87.7286C70.5978 88.1531 72.8095 87.9352 74.8195 87.1027C76.8295 86.2701 78.5475 84.8602 79.7562 83.0513C80.9649 81.2423 81.61 79.1156 81.61 76.94C81.61 74.0226 80.4511 71.2247 78.3882 69.1618C76.3253 67.0989 73.5274 65.94 70.61 65.94Z" fill="white"/>
                <path d="M35.6304 16.3C35.4855 16.1501 35.3123 16.0306 35.1207 15.9485C34.9292 15.8663 34.7233 15.8231 34.5149 15.8213C34.3065 15.8196 34.0998 15.8593 33.9069 15.9382C33.7141 16.0172 33.5388 16.1337 33.3915 16.2811C33.2441 16.4285 33.1276 16.6037 33.0486 16.7966C32.9697 16.9894 32.9299 17.1961 32.9317 17.4045C32.9335 17.6129 32.9767 17.8188 33.0589 18.0103C33.141 18.2019 33.2605 18.3751 33.4103 18.52L40.0703 25.18C40.2153 25.3254 40.3875 25.4408 40.5771 25.5195C40.7667 25.5983 40.97 25.6388 41.1753 25.6388C41.3807 25.6388 41.584 25.5983 41.7736 25.5195C41.9632 25.4408 42.1354 25.3254 42.2803 25.18L53.3804 14.08C53.5445 13.941 53.6784 13.7699 53.7737 13.577C53.869 13.3842 53.9237 13.1739 53.9343 12.9591C53.945 12.7443 53.9114 12.5295 53.8356 12.3283C53.7598 12.127 53.6435 11.9434 53.4938 11.7889C53.3442 11.6345 53.1644 11.5124 52.9656 11.4303C52.7668 11.3482 52.5532 11.3078 52.3382 11.3117C52.1231 11.3155 51.9112 11.3635 51.7154 11.4527C51.5197 11.5418 51.3444 11.6702 51.2003 11.83L41.2003 21.83L35.6304 16.3Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_1025_141">
                <rect width="87.86" height="94.18" fill="white"/>
                </clipPath>
            </defs>
            </svg>
                <h2 className="md:text-3xl font-bold">KETUA BIDANG KERJA <span className="text-yellow-400">PERSA</span></h2>
                <p>Di bawah ketua umum terdapat 5 ketua bidang dengan fokus berbeda-beda.</p>
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
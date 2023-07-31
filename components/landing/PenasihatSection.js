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
            <svg width="84" height="64" viewBox="0 0 84 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M64.8209 31.0555C63.4256 31.0555 62.2084 30.028 62.0075 28.6061C61.7914 27.0477 62.872 25.6107 64.4304 25.3946C68.3737 24.841 71.3502 21.4209 71.3577 17.4321C71.3577 13.4773 68.5216 10.1331 64.6124 9.4923C63.0654 9.23826 62.0151 7.77468 62.2691 6.22389C62.5269 4.6731 63.9792 3.63418 65.5375 3.88064C72.2033 4.97643 77.0452 10.6791 77.0452 17.4396C77.0301 24.2457 71.9455 30.0848 65.2152 31.029C65.0825 31.0479 64.9498 31.0555 64.8209 31.0555" fill="#FACC15"/>
            <mask id="mask0_1034_6" maskUnits="userSpaceOnUse" x="68" y="38" width="16" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M68.9585 38.0896H83.344V55.2642H68.9585V38.0896Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_1034_6)">
                <path fillRule="evenodd" clipRule="evenodd" d="M76.0992 55.2642C74.9541 55.2642 73.8735 54.5665 73.4413 53.4328C72.8801 51.9655 73.6195 50.3199 75.0869 49.7625C77.6576 48.7843 77.6576 47.7036 77.6576 47.1842C77.6576 45.5234 75.5456 44.3632 71.3824 43.7413C69.8316 43.5063 68.7586 42.0616 68.9899 40.5033C69.2212 38.9487 70.662 37.9135 72.2279 38.1145C81.4151 39.4909 83.3451 43.8058 83.3451 47.1842C83.3451 49.2468 82.5337 53.012 77.1116 55.0784C76.7779 55.2035 76.4367 55.2642 76.0992 55.2642" fill="#FACC15"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M42.0701 45.3406C33.0611 45.3406 22.3193 46.4477 22.3193 51.7182C22.3193 57.0303 33.0611 58.145 42.0701 58.145C51.0791 58.145 61.8171 57.0417 61.8171 51.7826C61.8171 46.4591 51.0791 45.3406 42.0701 45.3406M42.0701 63.8325C35.7798 63.8325 16.6318 63.8325 16.6318 51.7182C16.6318 39.6531 35.7798 39.6531 42.0701 39.6531C48.3605 39.6531 67.5046 39.6531 67.5046 51.7826C67.5046 63.8325 49.0278 63.8325 42.0701 63.8325" fill="#FACC15"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M42.0705 5.85425C35.655 5.85425 30.4376 11.0754 30.4376 17.4909C30.4263 20.6 31.6169 23.5082 33.7971 25.7036C35.9773 27.899 38.8817 29.1161 41.9757 29.1275L42.0705 31.9712V29.1275C48.486 29.1275 53.7071 23.9102 53.7071 17.4909C53.7071 11.0754 48.486 5.85425 42.0705 5.85425M42.0705 34.815H41.9681C37.3423 34.7998 33.0084 32.9874 29.7627 29.7114C26.5095 26.4392 24.7312 22.094 24.7502 17.4795C24.7502 7.93966 32.5193 0.166748 42.0705 0.166748C51.6255 0.166748 59.3946 7.93966 59.3946 17.4909C59.3946 27.0421 51.6255 34.815 42.0705 34.815" fill="#FACC15"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.3167 31.0555C19.1878 31.0555 19.0551 31.0479 18.9224 31.029C12.1922 30.0848 7.11136 24.2457 7.09619 17.4472C7.09619 10.6791 11.9382 4.97641 18.6039 3.88062C20.2002 3.63037 21.6145 4.68066 21.8723 6.22387C22.1264 7.77466 21.0761 9.23824 19.5291 9.49229C15.6199 10.1331 12.7837 13.4773 12.7837 17.4396C12.7913 21.4209 15.7677 24.8447 19.7073 25.3945C21.2656 25.6107 22.3463 27.0477 22.1301 28.6061C21.9292 30.028 20.7121 31.0555 19.3167 31.0555" fill="#FACC15"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.04166 55.2642C7.7042 55.2642 7.36295 55.2035 7.02928 55.0784C1.60341 53.0081 0.791992 49.243 0.791992 47.1841C0.791992 43.8095 2.72195 39.4908 11.913 38.1144C13.4789 37.9173 14.9122 38.9486 15.1472 40.5032C15.3785 42.0616 14.3055 43.5062 12.7547 43.7413C8.59145 44.3631 6.47949 45.5234 6.47949 47.1841C6.47949 47.7036 6.47949 48.7804 9.05403 49.7624C10.5214 50.3198 11.2608 51.9654 10.6996 53.4328C10.2674 54.5665 9.18674 55.2642 8.04166 55.2642" fill="#FACC15"/>
            </svg>
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
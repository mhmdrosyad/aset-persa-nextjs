import Image from "next/image";

const LeaderSection = () => {
    return (
        <div className="w-full h-fit pt-8 bg-gradient-to-br from-red-300 to-orange-100 overflow-y-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115.1 35.8C109.2 35.9 104.3 41.1 104.6 47C104.7 50.3 106.3 53.1 108.7 55C96.2999 71.6 83.6999 72.9 69.0999 45.4C74.2999 42.8 77.1999 36.2 73.3999 29.6C71.5999 26.4 67.8999 24.8 64.1999 25C64.0999 25 64.0999 25 63.9999 25C63.9999 25 63.8999 25 63.7999 25C60.0999 24.9 56.4999 26.4 54.5999 29.6C50.7999 36.2 53.6999 42.8 58.8999 45.4C44.2999 72.9 31.6999 71.6 19.2999 55C21.6999 53.1 23.2999 50.2 23.3999 47C23.5999 41.1 18.7999 35.9 12.8999 35.8C6.7999 35.7 1.8999 40.5 1.8999 46.6C1.8999 52.5 6.6999 57.4 12.6999 57.4C13.0999 57.4 13.5999 57.4 13.9999 57.3L18.0999 97.5C18.3999 100.7 21.0999 103.1 24.2999 103.1H63.9999H103.7C106.9 103.1 109.6 100.7 109.9 97.5L114 57.3C114.4 57.4 114.8 57.4 115.3 57.4C121.2 57.4 126.1 52.6 126.1 46.6C126.1 40.5 121.1 35.7 115.1 35.8Z" fill="#3C4652"/>
                    </svg>
                </div>
                <h2 className="md:text-3xl mb-8 text-center">Ketua dan Wakil Ketua <span className="font-bold">PERSA 2023 - 2025</span></h2>
                <Image alt="Ketua dan Wakil PERSA" src="/img/ketua.png" width={1440} height={448} />
            </div>
        </div>
    )
}

export default LeaderSection;
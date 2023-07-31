import Head from 'next/head';
import AsetsList from '@/components/aset/AsetsList'
import GaleriPersa from '@/components/landing/GaleriPersa';

export default function Home() {
  return (
    <>
      <Head><title>PERSA SAMBIREJO</title></Head>
      <h3 className="text-3xl text-center font-bold">GALERI PERSA</h3>
      <GaleriPersa />
    </>
  )
}

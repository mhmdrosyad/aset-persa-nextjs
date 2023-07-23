import Head from 'next/head';
import AsetsList from '@/components/AsetsList'

export default function Home() {
  return (
    <>
      <Head><title>ASET PERSA</title></Head>
      <AsetsList />
    </>
  )
}

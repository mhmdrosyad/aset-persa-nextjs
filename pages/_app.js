import AdminLayout from '@/components/aset/AdminLayout';
import Layout from '@/components/aset/Layout'
import LandingLayout from '@/components/landing/LandingLayout';
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import {AuthProvider } from '@/utils/AuthContext';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
      {router.pathname.startsWith('/aset/admin') ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : router.pathname === '/aset/auth/login' ? (
          <Component {...pageProps} />
      ) : router.pathname.startsWith('/aset') ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      )
      }
    </AuthProvider>
  )
}

import AdminLayout from '@/components/AdminLayout';
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import {AuthProvider } from '@/utils/AuthContext';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
      {router.pathname.startsWith('/admin') ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : router.pathname === '/auth/login' ? (
          <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
      }
    </AuthProvider>
  )
}

import { Montserrat } from 'next/font/google'
import AdminHeader from '@/components/admin/AdminHeader'
const montserrat = Montserrat({ subsets: ['latin'] })

import AuthContext from "@/utils/AuthContext";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from "next/router";


const AdminLayout = ({ children }) => {
    const { isLoggedIn, isLoading } = useContext(AuthContext);
    const router = useRouter();
 
      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (!isLoggedIn) {
        router.push('/aset/auth/login');
        return null;
      }
    return (
        <div className={`text-gray-600 lg:flex lg:gap-6 ${montserrat.className}`}>
            {!isLoggedIn ? (<div className="flex w-full mx-auto tex-center justify-center h-40 items-center">Loading...</div>) :
            (<><AdminHeader />
            <main className="lg:ml-96 max-w-7xl lg:w-full lg:ms- mx-auto lg:mx-0 lg:px-8 mb-32 lg-mb-3">
                {children}
            </main>
            </>)
            }
        </div>
    )
}

export default AdminLayout;
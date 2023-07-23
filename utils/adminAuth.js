import { useRouter } from "next/router";
import { useEffect } from 'react';

export const adminAuth = () => {
  const router = useRouter(); 
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];
  
  useEffect(() => {
    // Cek apakah pengguna sudah login
    const isLoggedIn = isTokenValid(token);

    // Jika pengguna belum login, arahkan ke halaman login
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return null;
}

const isTokenValid = async (token) => {
  try {
      const endpoint = 'http://localhost:5000/user';
      const mutation = `
          mutation CheckToken($token: String!) {
            checkToken(token: $token)
          }
      `;
      const variabels = { token: token };
      const client = new GraphQLClient(endpoint);
      const data = await client.request(mutation, variabels);
      return data.checkToken;
  } catch (error) {
    console.log(error)
  }
}
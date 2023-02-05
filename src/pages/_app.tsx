import { AuthProvider } from '@/contexts/AuthContext'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </AuthProvider>
    )
}

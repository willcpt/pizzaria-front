import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { FormEvent, useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { GetServerSideProps } from 'next'
import { canSSRGuest } from './utils/canSSRGuest'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

 async function handleLogin(event: FormEvent){
  event.preventDefault();

  if(email === '' || password === ''){
    toast.warn("Preencha os dados")
    return;
  }

  setLoading(true)

  let data = {
    email,
    password,
  }

  await signIn(data)

  setLoading(false);
 }
  
 


  return (
    <>
    <Head>
      <title>Sujeito Pizza</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo master"/>


      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
            placeholder='Digite seu email'
            type='text'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />

          <Input
            placeholder='Digite sua senha'
            type='password'
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
          />  

          <Button 
            type='submit'
            loading={loading}
          >
            Acessar
          </Button>

          <Link href="/signup">
            <p className={styles.text}>Não possui uma conta? Cadastre-se.</p>
          </Link>
          
        </form>
      </div>
    </div>
    </>
     
         
        
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props:{}
  }
}) 

 

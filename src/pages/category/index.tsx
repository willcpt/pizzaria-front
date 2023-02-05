import { Button } from '@/components/ui/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/ui/Input'
import { setupAPIClient } from '@/services/api'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../utils/canSSRAuth'
import styles from './styles.module.scss'

export default function Category(){
    const [name, setName] = useState('')

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if(name === ''){
            return;
        }

        const apiClient = setupAPIClient();
        await apiClient.post('/category', {
            name: name
        })

        toast.success('Categoria cadastrada com sucesso!')
        setName('');

    }

    return(
    <>
    <Head>
      <title>Nova categoria - Sujeito Pizza</title>
    </Head>
    <div>
    <Header/>


      <main className={styles.container}>
        <h1>Cadastrar categorias</h1>

        <form className={styles.form} onSubmit={handleRegister}>
          <input
            placeholder='Digite o nome da categoria'
            type='text'
            className={styles.input}
            value={name}
            onChange={ (e) => setName(e.target.value)}
          />

          

          <button 
            type='submit'
            className={styles.buttonAdd}
            //loading={loading}
          >
            Cadastrar
          </button>

          
          
        </form>
      </main>
    </div>
    </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})
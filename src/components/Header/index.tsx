import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import styles from "./styles.module.scss";


export function Header(){

    const { signOut } = useContext(AuthContext);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/logo.svg" width={190} height={60} />
                </Link>

                
                <nav className={styles.menuNav}>
                    <Link href="/category">
                        <p>Categoria</p>
                    </Link>

                    <Link href="/product">
                        <p>Cardapio</p>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={24} />
                    </button>
                </nav>

            </div>

        </header>
    )
}
import style from "./Nav.module.css"
import Link from "next/link"
export default function Nav() {
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.container}>
                    <div className={style.navContent}>
                        <div className={style.logo}>
                            <h1>Logo</h1>
                        </div>

                        <div>
                            <ul className={style.navList}>
                                <li className={style.navText}><Link href="/">Home</Link></li>
                                <li className={style.navText}><Link href="dashboard">dashboard</Link></li>
                                <li className={style.navText}><Link href="/">Contact</Link></li>
                                <li className={style.navText}><Link href="/">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
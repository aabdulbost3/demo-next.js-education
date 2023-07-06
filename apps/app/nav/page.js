import style from "./Nav.module.css"
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
                                <li className={style.navText}>Home</li>
                                <li className={style.navText}>About</li>
                                <li className={style.navText}>Contact</li>
                                <li className={style.navText}>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
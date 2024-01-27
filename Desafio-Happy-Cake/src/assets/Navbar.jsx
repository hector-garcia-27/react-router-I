import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="d-flex justify-content-between bg-danger text-white containerHome">
            <div className="d-flex p-4 parteUno">
                <Link to="/">
                    <button className='bg-danger text-white border-0'>
                        <div className="d-flex home">
                            <img src="../public/home.svg" alt="icono" />
                            <h5>Home</h5>
                        </div>
                    </button>
                </Link>
                <Link to="/contacto">
                    <button className='bg-danger text-white border-0'>
                        <div className="d-flex contacto" >
                            <img src="../public/contacto.svg" alt="icono" />
                            <h5>Contacto</h5>
                        </div>
                    </button >
                </Link>

            </div>
            <div className="d-flex p-4 parteDos">
                <div className="d-flex align-items-center parteUno">
                    <h5>Happy Cake</h5>
                    <img className='png' src="../public/cake.png" alt="icono" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
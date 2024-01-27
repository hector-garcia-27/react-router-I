import './home.css'

const Home = () => {
    return (
        <div className="contenido">
            <h1>Bienvenido a <strong>Happy Cake</strong></h1>
            <p>El lugar de los pasteles felices</p>
            <img className='imagen' src="..\public\cake2.jpg" alt="icono cake" />
        </div>
    )
}

export default Home
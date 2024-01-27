import './contacto.css'

const Contacto = ()=> {
    
    return (
        <div className='contacto2'>
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <h5>Correo:</h5>
            <input className='input1' type="text" placeholder="name@example.com" />
            <h5>Descripcion</h5>
            <input className='input2' type="text" />
            <button className="bg-danger text-white boton">Enviar</button>
        </div>
    )
}

export default Contacto
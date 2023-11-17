import React from 'react'
import './Form.css'
import { useState } from 'react';

export default function Form() {

    const [formState, setFormState] = useState(
        {
            nombre: '',
            email: '',
            phone: '',
            password: '',
    
        }
    );
    
    const { nombre, apellido, email, phone, password } = formState
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) =>  {
        event.preventDefault()
        
    }
    return (


        <div className='form'>
            <form onSubmit={onSubmit}>
                <ul>
                    <li><label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder='ingrese su nombre'
                            value={nombre}
                            onChange={onInputChange}
                            required /></li>
                    <li><label htmlFor="apellido">Apellido:</label>

                        <input
                            type="text"
                            className="form-control"
                            name="apellido"
                            placeholder='ingrese su apellido'
                            value={apellido}
                            required />
                    </li>
                    <li><label htmlFor="phone">Telefono:</label>
                        <input
                            type="number"
                            className="form-control"
                            name="phone"
                            placeholder='ingrese su teléfono'
                            value={phone}
                            required />
                    </li>

                    <li><label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder='ingrese su email'
                            value={email}
                            required />
                    </li>

                    <li> <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder='ingrese su contraseña'
                            value={password}
                            required />
                    </li>
                    <li><label htmlFor="password">Confirmar password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder='re-ingrese su contraseña'
                            value={password}
                            required />
                    </li>
                </ul>
            </form>
            <button type='submit'>Enviar</button>

        </div>


    )
}

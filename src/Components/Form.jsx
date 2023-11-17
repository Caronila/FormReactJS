import React, { useState } from 'react'
import './Form.css'


useState

export default function Form() {
    return (
        

        <div className='form'>
            <form>
                <ul>
                    <li><label htmlFor="nombre">Nombre:</label>
                        <input type="text" name="nombre" required /></li>
                    <li><label htmlFor="apellido">Apellido:</label>
                        <input type="text" name="apellido" required />
                    </li>
                    <li><label htmlFor="email">Email:</label>
                        <input type="email" name="email" required />
                    </li>
                    <li><label htmlFor="phone">Telefono:</label>
                        <input type="number" name="phone" required />
                    </li>
                    <li> <label htmlFor="password">Password:</label>
                        <input type="password" name="password" required />
                    </li>
                    <li><label htmlFor="password">Confirmar password:</label>
                        <input type="password" name="password" required />
                    </li>
                </ul>
            </form>
            <button type='submit'>Enviar</button>

        </div>


    )
}

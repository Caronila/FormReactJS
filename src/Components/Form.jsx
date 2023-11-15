import React from 'react'
import './Form.css'

export default function Form() {
    return (
        
            <div className='form'>
                <form>
                    <ul>
                        <li><label>Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required /></li>
                        <li><label>Apellido:</label>
                            <input type="text" id="apellido" name="apellido" required />
                        </li>
                        <li><label>Email:</label>
                            <input type="email" id="email" name="email" required />
                        </li>
                        <li><label>Telefono:</label>
                            <input type="number" id="phone" name="phone" required />
                        </li>
                        <li> <label>Password:</label>
                            <input type="password" id="password" name="password" required />
                        </li>
                        <li><label>Confirmar password:</label>
                            <input type="password" id="password" name="password" required />
                        </li>
                    </ul>
                    </form>
                    <button type='submit'>Enviar</button>

                    </div>

       
    )
}

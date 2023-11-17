import React, { useState, useEffect } from 'react';
import './Form.css';

export default function Form() {
  const [formState, setFormState] = useState({
    nombre: '',
    apellido: '',
    email: '',
    phone: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { nombre, apellido, email, phone, password } = formState;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  // Efecto para recargar la página después de 2 segundos cuando el formulario se ha enviado.
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Cambia el tiempo según tus necesidades
    }
  }, [isSubmitted]);

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <ul>
          <li>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              className='form-control'
              name='nombre'
              id='nombre'
              placeholder='ingrese su nombre'
              value={nombre}
              onChange={onInputChange}
              required
            />
          </li>
          <li>
            <label htmlFor='apellido'>Apellido:</label>
            <input
              type='text'
              className='form-control'
              name='apellido'
              id='apellido'
              placeholder='ingrese su apellido'
              value={apellido}
              onChange={onInputChange}
              required
            />
          </li>
          <li>
            <label htmlFor='phone'>Telefono:</label>
            <input
              type='tel'
              className='form-control'
              name='phone'
              id='phone'
              placeholder='ingrese su teléfono'
              value={phone}
              onChange={onInputChange}
              required
            />
          </li>
          <li>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              className='form-control'
              name='email'
              placeholder='ingrese su email'
              value={email}
              onChange={onInputChange}
              required
            />
          </li>
          <li>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              className='form-control'
              name='password'
              placeholder='ingrese su contraseña'
              value={password}
              onChange={onInputChange}
              required
            />
          </li>
        </ul>
        <button type='submit'>Enviar</button>
      </form>

      {isSubmitted && (
        <div className='success-message'>
          ¡La información se ha enviado correctamente! La página se recargará en unos segundos.
        </div>
      )}
    </div>
  );
}

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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { nombre, apellido, email, phone, password, password2 } = formState;

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
    setShowSuccessMessage(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [isSubmitted]);

  return (
    <div>
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
                placeholder='Ingrese su nombre'
                value={nombre}
                onChange={onInputChange}
                required='true'
              />
            </li>
            <li>
              <label htmlFor='apellido'>Apellido:</label>
              <input
                type='text'
                className='form-control'
                name='apellido'
                id='apellido'
                placeholder='Ingrese su apellido'
                value={apellido}
                onChange={onInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor='phone'>Teléfono:</label>
              <input
                type='tel'
                className='form-control'
                name='phone'
                id='phone'
                placeholder='Ingrese su teléfono'
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
                placeholder='Ingrese su email'
                value={email}
                onChange={onInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor='password'>Contraseña:</label>
              <input
                type='password'
                id='password'
                className='form-control'
                name='password'
                placeholder='Ingrese su contraseña'
                value={password}
                onChange={onInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor='password2'>Confirmar contraseña:</label>
              <input
                type='password'
                id='password2'
                className='form-control'
                name='password2'
                placeholder='Re-ingrese su contraseña'
                value={password2}
                onChange={onInputChange}
                required
              />
            </li>
          </ul>
          <button type='submit'>Enviar</button>
        </form>
      </div>

      {showSuccessMessage && (
        <div className='success-message'>
          ¡La información se ha enviado correctamente! La página se recargará en unos segundos.
        </div>
      )}
    </div>
  );
}

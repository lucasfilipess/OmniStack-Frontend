import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function NewIncident() {
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDesciption] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type='text'
            placeholder='Título do caso'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descrição'
            value={description}
            onChange={e => setDesciption(e.target.value)}
          />

          <input
            placeholder='Valor em reais'
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default NewIncident;

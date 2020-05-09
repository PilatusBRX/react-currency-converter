import React from 'react';
import moment from 'moment';
const Header = ({ base, result, amount, convertTo, date }) => {
  return (
    <div className='header'>
      <h1 className='title'>Câmbio de moedas</h1>
      <div className='base'>
        <span>{base === 'USD' && '$'}</span>
        <span>{base === 'BRL' && 'R$'}</span>
        <span>{base === 'EUR' && '€'}</span>
        <span>{base === 'GBP' && '£'}</span>
        <span className='amount'>{amount} é equivalente a</span>
      </div>
      <div className='convertTo'>
        <span>{convertTo === 'USD' && '$'}</span>
        <span>{convertTo === 'BRL' && 'R$'}</span>
        <span>{convertTo === 'EUR' && '€'}</span>
        <span>{convertTo === 'GBP' && '£'}</span>
        <span className='result'>{result}</span>
      </div>
      <p>Na data de {moment(date).format('DD/MM/YYYY')}</p>
    </div>
  );
};

export default Header;

import React, { Fragment, useState, useEffect } from 'react';
import Info from './Info';
import Swap from './Swap';
import Header from './Header';

const Converter = () => {
  const API = 'https://api.exchangeratesapi.io/latest';
  const [currencies, setCurrencies] = useState(['USD', 'BRL', 'EUR', 'GBP']);
  const [base, setBase] = useState('USD');
  const [convertTo, setConvertTo] = useState('BRL');
  const [result, setResult] = useState(null);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState(1);

  const selectBase = (e) => {
    setBase(e.target.value);
  };
  const selectCovertTo = (e) => {
    setConvertTo(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    fetch(`${API}?base=${base}`)
      .then((res) => res.json())
      .then((data) => {
        const date = data.date;
        const result = (data.rates[convertTo] * amount).toFixed(2);
        setResult(result);
        setDate(date);
      }, []);
  });

  const calculate = () => {
    if (amount === isNaN) {
      return;
    } else {
      fetch(`${API}?base=${base}`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.rates[convertTo] * amount;
        }, []);
    }
  };

  const onSwap = (e) => {
    e.preventDefault();
    setConvertTo(base);
    setBase(convertTo);
  };

  return (
    <Fragment>
      <div className='card'>
        <Header
          base={base}
          result={result}
          amount={amount}
          convertTo={convertTo}
          date={date}
        />
        <div className='container'>
          <form>
            <input
              type='number'
              className='form-control form-control-lg mx-3'
              onChange={handleAmount}
              name='amount'
              value={amount}
            />
            <select name='base' value={base} onChange={selectBase}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </form>

          <form>
            <input
              type='number'
              disabled
              value={result === null ? 'Convertendo...' : result}
              name='result'
            />
            <select
              name='convertTo'
              value={convertTo}
              onChange={selectCovertTo}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </form>
        </div>
        <Swap onSwap={onSwap} />
        <Info />
      </div>
    </Fragment>
  );
};

export default Converter;

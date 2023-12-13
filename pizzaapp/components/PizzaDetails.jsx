import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const PizzaDetails = ({ pizza }) => {
  // pizza size state
  const [size, setSize] = useState('small');

  // pizza crust state
  const [crust, setCrust] = useState('traditional');

  // pizza topping state
  const [additionalTopping, setAdditionalTopping] = useState([]);

  // additional topping price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);

  // price state
  const [price, setPrice] = useState(0);

  // set the price based on pizza size
  useEffect(() => {
    size === 'small'
      ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2))
      : size === 'medium'
      ? setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2))
      : size === 'large'
      ? setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2))
      : null;
  }, [size, pizza, additionalToppingPrice]);

  // additional toppings price
  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return <div>
    <div>
      <div>
        <Image width={450} height={450} src={pizza.image} alt=""/>
      </div>
    </div>
    <div>
      <div className='bg-pink-100'>
        <div>
          <div>
            <div className='font-semibold'>
              <h2 className="capitalize text-3xl mb-1">{pizza.name}</h2>
            </div>
            <span>{
            size==='small'
            ?'10inch'
            : size==="medium"
            ?'12inch':
            size==="large"
            ?'14inch':null
            }</span>
            <span>, {crust}</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default PizzaDetails;

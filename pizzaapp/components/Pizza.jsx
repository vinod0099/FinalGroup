'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import PizzaDetails from './PizzaDetails';
import { IoCloseOutline } from 'react-icons/io5';

Modal.setAppElement('body');

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    
    <div>
      

 <div className='bg-white rounded-lg shadow-lg group p-4 transition duration-300 ease-in-out hover:shadow-2xl'>
      <div onClick={toggleModal} className='cursor-pointer'>
        <Image width={270} height={270} src={pizza.image} alt={pizza.name} className='rounded-t-lg' priority />
      </div>

      <div className='px-2 py-4'>
        <h3 className="text-2xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </h3>
        <p className="text-sm font-medium min-h-[60px] mb-6">
          {pizza.description}
        </p>

        <div className="flex items-center justify-between">
          <span className='text-lg font-semibold'>
            starts at {pizza.priceSm}
          </span>
          <button onClick={toggleModal} className='bg-gradient-to-r from-yellow-500 to-red-600 text-white rounded-lg px-4 py-2 text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105'>
            Select
          </button>
        </div>
      </div>

      {modal && (
        <Modal 
          isOpen={modal} 
          onRequestClose={toggleModal}
          className="fixed inset-0 z-50 overflow-y-auto"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="min-h-screen px-4 text-center">
            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <IoCloseOutline onClick={toggleModal} className='text-4xl text-red-500 cursor-pointer absolute top-2 right-2' />
              <PizzaDetails pizza={pizza} />
            </div>
          </div>
        </Modal>
      )}
    </div>
    </div>
   
  );
}

export default Pizza;

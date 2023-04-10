import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Modal from 'react-modal'; 
Modal.setAppElement('#root');

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { addTransaction, selectedMonth } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:+amount,
      month: selectedMonth
      }
      addTransaction(newTransaction);
  setText("");
  setAmount("");
  // setModalIsOpen(false);
};

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className="btn btn-floating" onClick={openModal}>
        Agregar Movimiento
      </button>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Agregar Nuevo Movimiento"
          style={{ content: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '70%',  height: '70%', margin: 'auto'}}}
        >

        <h3>Agregar Nuevo Movimiento</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Descripcion</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribir aquí..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Monto <br />
              (negativo- gasto, positivo - ingreso)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn">Agregar Movimiento</button>
        <button className="btn" onClick={closeModal}>
          Cerrar
        </button>
        </form>
      </Modal>
    </>
  );
};

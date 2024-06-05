import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import "./TodoList.css";

const TodoList = () => {

const [modalIsOpen, setModalIsOpen] = useState(false);
const [inputValue, setInputValue] = useState('');
const formRef = useRef();
const [todos, setTodos] = useState([
    'Купить продукты',
    'Позвонить маме',
    'Приготовить ужин',
    'Прочитать книгу',
    'Посмотреть фильм',
    'Сделать уборку'
  ]);

const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};

const addNewItem = (newItem) => {
  setTodos([...todos, newItem]);
};


const handleChange = (e) => {
  setInputValue(e.target.value)
};

const handleSubmit = (e) => {
  e.preventDefault();
  setTodos([...todos, inputValue]);
  setInputValue('');
  formRef.current.reset();
};

const deleteTodo = (todo) => {
  const localTodos = [...todos].filter((el) => el !== todo);
  setTodos(localTodos);
}





const modalContent = (
    <div className='modal_open-form'>
     <form onSubmit={handleSubmit}
     ref={formRef}>
      <input className='modal-input' 
      type='text' 
      placeholder='  Новая задача' 
      value={inputValue} 
      onChange={handleChange}/>
      <button 
      className='modal-btn btn-1' 
      onClick={closeModal}>
        Отмена
      </button>
      <button 
      className='modal-btn btn-2'>
        Добавить
      </button>
     </form>
    </div>
  );

  return (
    <div>
      <button className='todo-btn-add' onClick={openModal}>Добавить задачу</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} onAdd={addNewItem}>
        {modalContent}
      </Modal>
      <ul className='todolist'>
        {todos.map((el, i) => {
          return <li className='todolist-item' key={i}>
            {el}
            <input className='checkbox' type='checkbox'></input>
            <button className='btnDelete' onClick={() => deleteTodo(el)}>Удалить</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

  export default TodoList;
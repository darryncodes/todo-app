import React, { useState } from 'react';
import axios from 'axios';

import styles from './CreateToDo.module.scss';

const CreateToDo = (props) => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let name = input;

        try {
            await axios.post('/api/v1/todos', { name });
            props.showAllTodos();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Todo</h1>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['form__control']}>
                    <input
                        type='text'
                        name='name'
                        className={styles['form__input']}
                        placeholder='Create a new todo...'
                        onChange={handleInput}
                    />
                </div>
            </form>
        </>
    );
};

export default CreateToDo;

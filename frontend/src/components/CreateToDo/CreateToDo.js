import React, { useState } from 'react';
import axios from 'axios';

import styles from './CreateToDo.module.scss';

const CreateToDo = (props) => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);

        if (input.length) {
            setMessage('');
            setError(false);
        }
        if (input.length > 100) {
            setMessage('You can not exceed 100 characters');
            setError(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let name = input;

        if (input.trim().length === 0) {
            setMessage('Please enter a todo');
            setError(true);
            return;
        }
        if (input.length > 100) {
            setMessage('You can not exceed 100 characters');
            setError(true);
            return;
        }

        if (input.length) {
            setMessage('');
            setError(false);
        }

        try {
            await axios.post('/api/v1/todos', { name });
            props.showAllTodos();
            setMessage('Success, todo added');
            setSuccess(true);
            setTimeout(() => {
                setMessage('');
            }, 1750);
        } catch (error) {
            console.log(error);
            setMessage('There was an error, please try again');
            setError(true);
        }
        setInput('');
    };

    return (
        <>
            <h1>Todo</h1>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['form__control']}>
                    <input
                        type='text'
                        name='name'
                        className={`${error ? styles.form__error : null} 
                        ${styles.form__input}`}
                        placeholder='Create a new todo...'
                        onChange={handleInput}
                        value={input}
                    />
                    {message && (
                        <span
                            className={`${styles.form__message} 
                            ${error ? styles.form__messageError : null} 
                            ${success ? styles.form__messageSuccess : null}`}
                        >
                            {message}
                        </span>
                    )}
                </div>
            </form>
        </>
    );
};

export default CreateToDo;

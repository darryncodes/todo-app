import React, { useState } from 'react';
import styles from './CreateToDo.module.scss';

const CreateToDo = () => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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

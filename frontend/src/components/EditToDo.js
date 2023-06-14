import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './EditToDo.module.scss';

const EditToDo = () => {
    const [input, setInput] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    };
    const handleComplete = (e) => {
        setIsComplete((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`container ${styles.edit}`}>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['form__control']}>
                    <label htmlFor='todo'>Edit</label>
                    <input
                        type='text'
                        name='todo'
                        className={styles['form__edit--todo']}
                        onChange={handleInput}
                    />
                </div>
                <div className={styles['form__control']}>
                    <label htmlFor='completed'>Completed</label>
                    <input
                        type='checkbox'
                        name='completed'
                        className={styles['form__complete--todo']}
                        checked={isComplete}
                        onChange={handleComplete}
                    />
                </div>
                <button
                    type='submit'
                    className={`${styles.btn} ${styles['btn-submit']}`}
                >
                    Edit
                </button>
            </form>
            <Link to='/' className={`${styles.btn} ${styles['btn-back']}`}>
                Back to todo's
            </Link>
        </div>
    );
};

export default EditToDo;

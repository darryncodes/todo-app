import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './EditToDo.module.scss';

const EditToDo = () => {
    const [input, setInput] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    let { id } = useParams();

    const showTodos = async () => {
        try {
            const response = await axios.get(`/api/v1/todos/${id}`);
            const { complete, name } = response.data.todo;
            setInput(name);
            if (complete) {
                setIsComplete(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        showTodos();
    });

    const handleInput = (e) => {
        setInput(e.target.value);
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
                        value={input}
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

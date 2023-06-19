import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './EditToDo.module.scss';

const EditToDo = () => {
    let inputRef = useRef();
    let checkboxRef = useRef();
    const [input, setInput] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    let { id } = useParams();

    const showTodo = async () => {
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
        showTodo();
    });

    const handleInput = (e) => {
        setInput(e.target.value);
    };
    const handleComplete = (e) => {
        setIsComplete((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const editedTodo = inputRef.current.value;
            const completed = checkboxRef.current.checked;
            await axios.patch(`/api/v1/todos/${id}`, {
                name: editedTodo,
                complete: completed,
            });
        } catch (error) {
            console.log(error);
        }
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
                        defaultValue={input}
                        ref={inputRef}
                    />
                </div>
                <div className={styles['form__control']}>
                    <label htmlFor='completed'>Completed</label>
                    <input
                        type='checkbox'
                        name='completed'
                        className={styles['form__complete--todo']}
                        defaultChecked={isComplete}
                        ref={checkboxRef}
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

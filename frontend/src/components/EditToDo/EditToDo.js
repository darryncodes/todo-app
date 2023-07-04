import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './EditToDo.module.scss';

const EditToDo = () => {
    let inputRef = useRef();
    let checkboxRef = useRef();
    const [defaultValue, setDefaultValue] = useState('');
    const [editedValue, setEditedValue] = useState('');
    const [isComplete, setIsComplete] = useState();
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    let { id } = useParams();

    const showTodo = async () => {
        try {
            const response = await axios.get(`/api/v1/todos/${id}`);
            const { complete, name } = response.data.todo;
            setDefaultValue(name);

            if (complete === true) {
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
        setDefaultValue(e.target.value);

        setEditedValue(inputRef.current.value);

        if (editedValue.length) {
            setMessage('');
            setError(false);
        }

        if (editedValue.length > 100) {
            setMessage('You can not exceed 100 characters');
            setError(true);
        }
    };

    const handleComplete = () => {
        setIsComplete((prevState) => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (defaultValue === editedValue && !isComplete) {
            setMessage('Please edit the todo');
            setError(true);
            return;
        }

        if (editedValue.trim().length === 0 && !isComplete) {
            setMessage('Please edit the todo');
            setError(true);
            return;
        }
        if (editedValue.length > 100 && !isComplete) {
            setMessage('You can not exceed 100 characters');
            setError(true);
            return;
        }

        if (editedValue.length) {
            setMessage('');
            setError(false);
        }

        try {
            const editedTodo = inputRef.current.value;
            const completed = checkboxRef.current.checked;

            await axios.patch(`/api/v1/todos/${id}`, {
                name: editedTodo,
                complete: completed,
            });
            setMessage('Success, todo edited');
            setSuccess(true);
            setTimeout(() => {
                setMessage('');
            }, 1750);
        } catch (error) {
            console.log(error);
            setMessage('There was an error, please try again');
            setError(true);
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
                        className={`${error ? styles.form__error : null} 
                        ${styles.form__edit}`}
                        onChange={handleInput}
                        defaultValue={defaultValue}
                        ref={inputRef}
                    />
                </div>
                <div className={styles['form__control']}>
                    <label htmlFor='completed'>Completed</label>
                    <input
                        type='checkbox'
                        name='completed'
                        className={styles['form__complete--todo']}
                        onChange={handleComplete}
                        defaultChecked={isComplete}
                        ref={checkboxRef}
                    />
                </div>
                <button
                    type='submit'
                    className={`${styles.btn} ${styles['btn-submit']}`}
                >
                    Edit
                </button>
                {message && (
                    <span
                        className={`${styles.form__message} 
                        ${error ? styles.form__messageError : null}
                        ${success ? styles.form__messageSuccess : null}`}
                    >
                        {message}
                    </span>
                )}
            </form>
            <Link to='/' className={`${styles.btn} ${styles['btn-back']}`}>
                Back to todo's
            </Link>
        </div>
    );
};

export default EditToDo;

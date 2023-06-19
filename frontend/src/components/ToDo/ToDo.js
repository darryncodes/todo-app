import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './ToDo.module.scss';
import BinIcon from './../../assets/BinIcon';
import EditIcon from './../../assets/EditIcon';

const ToDo = (props) => {
    const handleDelete = async (e) => {
        const id = e.currentTarget.id;

        try {
            await axios.delete(`/api/v1/todos/${id}`);
            props.showAllTodos();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`${styles.todos} container`}>
            {props.data?.map((item) => (
                <div className={styles['todos__todo']} key={item._id}>
                    <div className={styles['todos__description']}>
                        <p>{item.name}</p>
                    </div>
                    <div className={styles['todos__actions']}>
                        <Link
                            to='/edit-todo'
                            className={styles['todos__btn--edit']}
                        >
                            <EditIcon />
                        </Link>
                        <button
                            className={styles['todos__btn--bin']}
                            onClick={handleDelete}
                            id={item._id}
                        >
                            <BinIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToDo;

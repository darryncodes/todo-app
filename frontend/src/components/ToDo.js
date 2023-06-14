import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ToDo.module.scss';
import BinIcon from '../assets/BinIcon';
import EditIcon from '../assets/EditIcon';

const ToDo = () => {
    const [isComplete, setIsComplete] = useState(false);

    const handleComplete = (e) => {
        setIsComplete((prevState) => !prevState);
    };

    return (
        <div className={`${styles.todos} container`}>
            <div className={styles['todos__todo']}>
                <div className={styles['todos__description']}>
                    <label htmlFor='completed' className='sr-only'>
                        Completed
                    </label>
                    <input
                        type='checkbox'
                        name='completed'
                        className={styles['todos__complete']}
                        checked={isComplete}
                        onChange={handleComplete}
                    />
                    <p>Play football</p>
                </div>
                <div className={styles['todos__actions']}>
                    <Link
                        to='/edit-todo'
                        className={styles['todos__btn--edit']}
                    >
                        <EditIcon />
                    </Link>
                    <button className={styles['todos__btn--bin']}>
                        <BinIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToDo;

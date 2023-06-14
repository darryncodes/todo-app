import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './ToDo.module.scss';
import BinIcon from '../assets/BinIcon';
import EditIcon from '../assets/EditIcon';

const ToDo = () => {
    const [data, setData] = useState([]);

    const handleComplete = (prevState) => !prevState;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/data');
            setData(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className={`${styles.todos} container`}>
            {data?.map((item) => (
                <div className={styles['todos__todo']} key={item.id}>
                    <div className={styles['todos__description']}>
                        <label htmlFor='completed' className='sr-only'>
                            Completed
                        </label>
                        <input
                            type='checkbox'
                            name='completed'
                            className={styles['todos__complete']}
                            onChange={handleComplete}
                            id={item.id}
                            checked={item.complete}
                        />
                        <p>{item.name}</p>
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
            ))}
        </div>
    );
};

export default ToDo;

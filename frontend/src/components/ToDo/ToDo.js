import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ToDo.module.scss';
import BinIcon from './../../assets/BinIcon';
import EditIcon from './../../assets/EditIcon';

const ToDo = (props) => {
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

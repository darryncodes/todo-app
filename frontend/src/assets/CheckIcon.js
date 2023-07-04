import React from 'react';

import styles from './CheckIcon.module.scss';

const CheckIcon = () => {
    return (
        <div className={styles.icon}>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
                <path
                    fill='none'
                    stroke='#FFF'
                    stroke-width='2'
                    d='M1 4.304L3.696 7l6-6'
                />
            </svg>
        </div>
    );
};

export default CheckIcon;

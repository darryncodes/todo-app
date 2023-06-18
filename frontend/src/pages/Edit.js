import React from 'react';

import Header from '../UI/Header';
import Main from './../UI/Main';
import EditToDo from './../components/EditToDo/EditToDo';

const Edit = () => {
    return (
        <>
            <Header>
                <h1>Edit todo</h1>
            </Header>
            <Main>
                <EditToDo />
            </Main>
        </>
    );
};

export default Edit;

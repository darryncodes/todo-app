import React from 'react';

import Header from '../UI/Header';
import Main from './../UI/Main';
import CreateToDo from '../components/CreateToDo';
import ToDo from '../components/ToDo';

const HomePage = () => {
    return (
        <>
            <Header>
                <CreateToDo />
            </Header>
            <Main>
                <ToDo />
            </Main>
        </>
    );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../UI/Header';
import Main from './../UI/Main';
import CreateToDo from './../components/CreateToDo/CreateToDo';
import ToDo from './../components/ToDo/ToDo';

const HomePage = () => {
    const [data, setData] = useState([]);

    const showTodos = async () => {
        try {
            const response = await axios.get('/api/v1/todos');
            setData(response.data.todos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        showTodos();
    }, []);

    return (
        <>
            <Header>
                <CreateToDo showAllTodos={showTodos} />
            </Header>
            <Main>
                <ToDo data={data} />
            </Main>
        </>
    );
};

export default HomePage;

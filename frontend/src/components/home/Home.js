import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

    const isAuthorized = useSelector(state => state.auth.auth);
    const authToken = useSelector(state => state.auth.authToken);

    console.log(isAuthorized);
    console.log(authToken);

    return (
        <div>
            <h1>Nikesh</h1>
        </div>
    )
}

export default Home;
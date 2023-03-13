import React from 'react';
import { Provider } from 'react-redux';
import store from './mystore';

function Provide(props) {
    return (
        <div>
            <Provider store={store}></Provider>
        </div>
    );
}

export default Provide;
import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';

import ComponentDetail from './components/CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ComponentDetail />
            <ComponentDetail />
            <ComponentDetail />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
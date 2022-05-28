import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';

import ComponentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ComponentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Nice Post 1" avatarSrc={faker.image.avatar()} />
            <ComponentDetail author="Alex" timeAgo="Today at 2:00AM" commentText="Nice Post 2" avatarSrc={faker.image.avatar()} />
            <ComponentDetail author="Jane" timeAgo="Yesterday at 5:00PM" commentText="Nice Post 3" avatarSrc={faker.image.avatar()} />
            <ApprovalCard>
                <CommentDetail author="Bill" timeAgo="Yesterday at 3:00PM" commentText="Nice Post 4" avatarSrc={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
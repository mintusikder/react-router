import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise)
    console.log(users)
    return (
        <div>
            <h3>User22222</h3>
        </div>
    );
};

export default Users2;
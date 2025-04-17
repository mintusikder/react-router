import React from 'react';
import Dad from './Dad';
import Aunt from './Aunt';
import Ankel from './Ankel';

const GrantPa = () => {
    return (
        <div>
            <h3>GrandPa</h3>
            <section className='flex'>
                <Dad></Dad>
                <Ankel></Ankel>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default GrantPa;
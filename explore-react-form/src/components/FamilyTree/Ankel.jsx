import React from 'react';
import Cousin from './Cousin';

const Ankel = () => {
    return (
        <div>
            <h3>Ankel</h3>
            <section className='flex'>
                <Cousin name="Rafsan"></Cousin>
                <Cousin name="Jafsa"></Cousin>
            </section>
        </div>
    );
};

export default Ankel;
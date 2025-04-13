import React, { use } from 'react';

const MarkChart = ({marksPromise}) => {
    const marksData = use(marksPromise)
    const marks = marksData.data
    console.log(marks)
    return (
        <div>
            
        </div>
    );
};

export default MarkChart;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Order_summary() {
    const navigate = useNavigate();

    return (
        <>
            <h2>Order Placed</h2>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}

export default Order_summary;

import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const params = useParams(); // ✅ This gets all dynamic route params

    return (
      <>
        <h2>Hi, welcome User {params.id}!</h2>  {/* ✅ Use params.id */}
      </>
    );
}

export default Details;

import React from 'react';

export default function Squares ({ squareObj, fillSquare }) {
    return (
        <>
         {
             squareObj.map(square => <button onClick={() => fillSquare(square.gridPos)} key={square.gridPos} className="square">{square.fill}</button>)
         }
        </>
    );
}
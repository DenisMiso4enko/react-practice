import React, { useState } from 'react';

export const RecursiveButton = () => {
    const [mode, setMode] = useState(false)
    return (
        <div>
            <button onClick={() => setMode(!mode)}>Покажи/скрой след шаг</button>
            {mode ? <RecursiveButton/> : null}
        </div>
    );
};


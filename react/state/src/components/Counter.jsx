import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(1)
    return (
        <div>
            {count}
            <div>
                <button onClick={() => setCount((count) => count + 1)}>+</button>
                <button onClick={() => setCount((count) => count = 0)}>drop</button>
                <button onClick={() => setCount((count) => count - 1)}>-</button>
            </div>
        </div>
    )
}

export default Counter

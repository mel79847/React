import { useState } from 'react';

export default function Contador () {
    const [counter, setCounter] = useState<number>(0);

    return <button onClick={() => {
        setCounter(counter + 1)
    }}>
        {counter}
    </button>
}

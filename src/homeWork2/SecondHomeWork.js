import React, {useState} from 'react';
import { Button } from 'react-bootstrap'


const SecondHomeWork = () => {

    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }

    const clear = () => {
        setCount(0)
    }
    return (
        <div>
            <Button onClick={plus}>Plus</Button>
            <Button onClick={minus}>Minus</Button>
            <Button onClick={clear}>Clear</Button>
            <br/>
            {count}

        </div>
    );
};

export default SecondHomeWork;
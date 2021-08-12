import { useState } from 'react'
import { CounterButton } from './Button'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className='counter'>
            <CounterButton text='-' onClick={() => setCounter(counter - 1)} />
            <div className='counter-value'>
                <p>{counter}</p>
            </div>
            <CounterButton text='+' onClick={() => setCounter(counter + 1)} />
        </div>
    )
}

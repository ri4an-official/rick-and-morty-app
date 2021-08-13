import { useEffect } from 'react'
import { useState } from 'react'
import { CounterButton } from './Button'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [bgColor, setBgColor] = useState('red')
    const rand = () => Math.floor(Math.random() * (255 - 0 + 1)) + 0
    useEffect(() => setBgColor(`rgb(${rand()},${rand()},${rand()})`), [counter])
    return (
        <div className='counter'>
            <CounterButton text='-' onClick={() => setCounter(counter - 1)} />
            <div className='counter-value' style={{ backgroundColor: bgColor }}>
                {counter}
            </div>
            <CounterButton text='+' onClick={() => setCounter(counter + 1)} />
        </div>
    )
}

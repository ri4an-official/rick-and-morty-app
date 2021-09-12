import { useState } from 'react'

export const useInput = (initValue = '') => {
    const [value, setValue] = useState(initValue)
    return {
        value,
        onChange: (e: any) => setValue(e.currentTarget.value),
    }
}

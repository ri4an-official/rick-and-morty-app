import { useEffect, useState } from 'react'

export const useInput = (withError = false) => {
    const [value, setValue] = useState('')
    const [isError, setIsError] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        if (isChecked) !value ? setIsError(true) : setIsError(false)
    }, [value, isChecked])
    return withError
        ? {
              isError,
              value,
              onChange: (e: any) => {
                  setValue(e.currentTarget.value)
                  setIsChecked(true)
              },
          }
        : { value, onChange: (e: any) => setValue(e.currentTarget.value) }
}

import search from './../../assets/svg/search.svg'
import filter from './../../assets/svg/filter.svg'
import { useState } from 'react'
export const Search = (props: {
    placeholder: string
    onSubmit: (query: string) => Promise<any>
}) => {
    // TODO - add filter
    const [query, setQuery] = useState('')
    return (
        <div className='filter'>
            <img className='seacrh-icon' src={search} alt='search' />
            <input
                onChange={(e) => setQuery(e.currentTarget.value)}
                onKeyPress={async (e) =>
                    e.key === 'Enter' && (await props.onSubmit(query))
                }
                placeholder={props.placeholder}
            />
            <div className='vertical-line' />
            <img className='filter-icon' src={filter} alt='filter' />
        </div>
    )
}

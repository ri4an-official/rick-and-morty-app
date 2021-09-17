import search from './../assets/svg/search.svg'
import filter from './../assets/svg/filter.svg'
import { useInput } from './hooks/useInput'
export const Search = (props: {
    placeholder: string
    onSubmit: (query: string) => Promise<any>
}) => {
    // TODO- add filter
    const input = useInput()
    return (
        <div className='filter'>
            <img className='seacrh-icon' src={search} alt='search' />
            <input
                {...input}
                onKeyPress={async (e) =>
                    e.key === 'Enter' && (await props.onSubmit(input.value))
                }
                placeholder={props.placeholder}
            />
            <div className='vertical-line' />
            <img className='filter-icon' src={filter} alt='filter' />
        </div>
    )
}

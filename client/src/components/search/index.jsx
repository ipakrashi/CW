import './styles.module.css'

function Search({ setSearch }) {
    return (
        <input
            type='text'
            name=''
            id=''
            className='search'
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default Search

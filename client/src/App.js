import axios from 'axios'
import { React, useState, useEffect } from 'react'
import Search from './components/search'
const base_url = process.env.REACT_APP_API_URL

const App = () => {
    const [obj, setObj] = useState({})
    const [sort, setSort] = useState({ sort: 'Rating', order: 'desc' })
    const [filterGenre, setFilterGenre] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const url = `${base_url}?page=${page}&sort=${sort},${sort.order}&limit=${limit}&genre=${filterGenre.toString()}&search=${search}`
                const { data } = await axios.get(url)
                setObj(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllMovies()
    }, [sort, filterGenre, page, search, limit])

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='head'>
                    <img src='./images/logo.png' alt='' className='logo' />
                    <Search setSearch={setSearch} />
                </div>
                <div className='body'>
                    <div className='table_container'></div>
                    <div className='filter_container'></div>
                </div>
            </div>
        </div>
    )
}

export default App

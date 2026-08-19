import asyncHandler from 'express-async-handler'
import movieModel from '../models/movieModel.js'
import movies from '../config/movies.json' with { type: 'json' }

// @desc
//  route
//  @access
const getMovies = asyncHandler(async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0
        const limit = parseInt(req.query.limit) || 5
        const search = req.query.search || ''
        let sort = req.query.sort || 'IMDB_Rating'
        let genre = req.query.genre || 'All'

        // Dynamically fetch unique genres from the MongoDB collection
        const genreOptions = await movieModel.distinct('Genre')

        // Handle genre filtering logic
        genre = genre === 'All' ? [...genreOptions] : genre.split(',')

        // Handle sorting logic
        sort = req.query.sort ? req.query.sort.split(',') : [sort]

        let sortBy = {}

        if (sort[1]) {
            sortBy[sort[0]] = sort[1]
        } else {
            sortBy[sort[0]] = 'asc'
        }

        const movies = await movieModel
            .find({
                Series_Title: { $regex: search, $options: 'i' },
            })
            .where('Genre')
            .in([...genre])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)

        const total = await movieModel.countDocuments({
            Genre: { $in: [...genre] },
            Series_Title: { $regex: search, $options: 'i' },
        })

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            genres: genreOptions,
            movies,
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Error Occurred' })
    }
})

const insertMovies = asyncHandler(async (req, res) => {
    try {
        const inserted = await movieModel.insertMany(movies)
        res.status(201).json({ data: inserted })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error Occurred' })
    }
})

export { getMovies, insertMovies }

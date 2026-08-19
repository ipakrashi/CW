import express from 'express'
import { getMovies, insertMovies } from '../controller/moviesController.js'

const router = express.Router()

router.get('/', getMovies)
router.post('/add', insertMovies)

export default router

import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema(
    {
        Poster_Link: {
            type: String,
            trim: true,
        },
        Series_Title: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        Released_Year: {
            type: String,
            trim: true,
        },
        Certificate: {
            type: String,
            default: null,
            trim: true,
        },
        Runtime: {
            type: String,
            trim: true,
        },
        Genre: [
            {
                type: String,
                trim: true,
            },
        ],
        IMDB_Rating: {
            type: Number,
            min: 0,
            max: 10,
        },
        Overview: {
            type: String,
            trim: true,
        },
        Meta_score: {
            type: Number,
            default: null,
        },
        Director: {
            type: String,
            trim: true,
        },
        No_of_Votes: {
            type: Number,
            default: 0,
        },
        Gross: {
            type: String,
            default: null,
            trim: true,
        },
        Stars: [
            {
                type: String,
                trim: true,
            },
        ],
    },
    {
        timestamps: true,
    },
)

const movieModel = mongoose.model('Movie', movieSchema, 'movies')
export default movieModel

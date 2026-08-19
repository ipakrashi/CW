import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        img: { type: String, required: true },
        year: { type: Number, required: true },
        rating: { type: Number, required: true },
        genre: {
            type: [String], // Array to allow multiple genres per movie
            required: true,
            lowercase: true,
            enum: [
                'action',
                'adventure',
                'crime',
                'drama',
                'family',
                'fantasy',
                'horror',
                'music',
                'mystery',
                'romance',
                'sci-fi',
                'thriller',
                'western',
            ],
        },
    },
    { timestamps: true },
)

const movieModel = mongoose.model('Movie', movieSchema, 'movies')
export default movieModel

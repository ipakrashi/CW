import './table.css'
function Table({ movies = [] }) {
    return (
        <div className='container'>
            <div className='heading'>
                <p className='title_tab'>Title</p>
                <p className='genre_tab'>Genre</p>
                <p className='rating_tab'>Rating</p>
            </div>
            {movies.map((movie) => (
                <div className='movie' key={movie._id}>
                    <div className='title_container'>
                        <img
                            src={movie.Poster_Link}
                            alt={movie.Series_Title}
                            className='movie_img'
                        />
                        <p className='movie_title'>
                            {movie.Series_Title}
                            {'    '}
                            {movie.Released_Year}
                        </p>
                    </div>
                    <div className='genre'>
                        {movie.Genre.map((genre, index) => (
                            <p className='movie_genre'>
                                {genre}
                                {index !== movie.Genre.length - 1 && ','}
                            </p>
                        ))}
                    </div>
                    <div className='rating_container'>
                        <img
                            src='./images/star.png'
                            alt='star'
                            className='star_img'
                        />
                        <p className='movie_rating'>{movie.IMDB_Rating}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Table

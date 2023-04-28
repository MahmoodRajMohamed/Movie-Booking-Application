import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import MovieItems from './Movies/MovieItem'
import { getAllMovie } from '../Api-helpers/api-helpers'

const Homepage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getAllMovie()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log(err))
    }, []);
    console.log(movies);
    return (
        <Box width='100%' height='100%' margin='auto' marginTop={2}>
            <Box margin={'auto'} width='70%' height={'40vh'} padding={2}>
                <img src="https://pbs.twimg.com/media/FqMf76eaMAE2uUG?format=jpg&name=4096x4096 " alt=''
                    width={"100%"}
                    height={"100%"}
                />
            </Box>
            <Box padding={5} margin="auto">
                <Typography variant='h4' textAlign={'center'}>
                    Latest Release
                </Typography>
            </Box>
            <Box display='flex' margin="auto" width="80%" justifyContent={'center'}
                flexWrap='wrap'>
                {movies && movies.map((movie, index) =>
                    <MovieItems id={movie.id} 
                    title={movie.title}
                    posterUrl = {movie.posterUrl}
                    releaseDate={movie.releaseDate}
                    key={index} />)}
            </Box>
            <Box display={'flex'} padding={5} margin={'auto'}>
                <Button LinkComponent={Link} to="/movies"
                    variant='outlined'
                    sx={{ margin: 'auto', color: '@2b2d32' }}>
                    View All Movies
                </Button>
            </Box>
        </Box>
    )
}

export default Homepage
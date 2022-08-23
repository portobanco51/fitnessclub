import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ search, setSearch, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisePerPage = 9;
    const lastElementIndex = currentPage * exercisePerPage;
    const firstElementIndex = lastElementIndex - exercisePerPage;
    const currentExercises = search.slice(firstElementIndex, lastElementIndex);

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 1300, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodyPart}`, exerciseOptions);
            }
            setSearch(exercisesData)
        }
        fetchExercisesData()
    }, [bodyPart, setSearch])



    return (
        <Box sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
            <Typography variant='h3' mb='46px'>
                Showing Results ( {firstElementIndex + 1} - {lastElementIndex} )
            </Typography>

            <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
                {currentExercises.map((element, i) => {
                    return <ExerciseCard key={i} exercise={element} />
                })}
            </Stack>
            <Stack mt='100px' alignItems='center'>
                {search.length > 9 && (
                    <Pagination color='standard' variant='outlined' shape='circular' defaultPage={1} count={Math.ceil(search.length / exercisePerPage)} page={currentPage} onChange={paginate} size='medium' />
                )}
            </Stack>
        </Box >
    )
}
export default Exercises
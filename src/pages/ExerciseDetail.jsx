import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import { fetchData, exerciseOptions } from '../utils/fetchData'
import Detailed from '../components/Detailed'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            console.log(exerciseDetailData)

            setExerciseDetail(exerciseDetailData)
        }
        fetchExercisesData()
    }, [id])



    return (
        <Box>
            <Detailed exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    )
}
export default ExerciseDetail
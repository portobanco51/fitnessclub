import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Detailed from '../components/Detailed'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData)

        }
        fetchExercisesData()
    }, [id])



    return (
        <Box>
            <Detailed exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseVideos.name} />
            <SimilarExercises />
        </Box>
    )
}
export default ExerciseDetail
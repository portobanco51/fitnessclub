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
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData)

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents)

            const targetMuscleData = await fetchData(`${exerciseDbUrl}/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleData)

            const equipmentData = await fetchData(`${exerciseDbUrl}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentData)

        }
        fetchExercisesData()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [id])



    return (
        <Box>
            <Detailed id='detailed' exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}
export default ExerciseDetail
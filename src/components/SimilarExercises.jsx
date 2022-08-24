import { Box, Stack, Typography } from '@mui/material'
import SliderList from './SliderList'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '6.5rem', xs: '4rem' } }}>

            <Typography mb='4rem' variant='h3' textAlign='center' >🦵🏽 Exercises to target the <span style={{ color: '#ff2625', textDecoration: 'underline' }}>same muscle group!</span> 💪🏼</Typography>

            <Stack direction='row' alignItems='center' sx={{ p: 2, position: 'relative' }}>
                {targetMuscleExercises.length
                    ? <SliderList data={targetMuscleExercises} />
                    : <Loader />}
            </Stack>

            <Typography mb='4rem' mt='4rem' variant='h3' textAlign='center' >🏋🏽‍♂️ Exercises that use the <span style={{ color: '#ff2625', textDecoration: 'underline' }}>same equipment!</span> 🏋🏽‍♀️</Typography>

            <Stack mb='4rem' direction='row' alignItems='center' sx={{ p: 2, position: 'relative' }}>
                {equipmentExercises.length
                    ? <SliderList data={equipmentExercises} />
                    : <Loader />}
            </Stack>
        </Box>
    )
}
export default SimilarExercises
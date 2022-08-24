import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import SliderList from './SliderList';

const SearchEngine = ({ setSearch, bodyPart, setBodyPart }) => {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {

        const fetchPartsList = async () => {
            const partsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setList(['all', ...partsData])
        }
        fetchPartsList()
    }, [])


    const handleInput = async (e) => {
        e.preventDefault()
        if (input) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(input) || exercise.target.toLowerCase().includes(input) || exercise.equipment.toLowerCase().includes(input) || exercise.bodyPart.toLowerCase().includes(input));

            setSearch(searchedExercises)
            setInput('')
            await window.scrollTo({ top: 1300, left: 100, behavior: 'smooth' })
        }
    }

    return (
        <Stack id='search' className='search' alignItems='center' mt='37px' justifyContent={'center'} p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign={'center'} ><span style={{ textDecoration: 'underline', color: '#ff2625' }} >Awesome</span> Exercises You <br /> Should Know</Typography>
            <Box position='relative' mb='72px'>
                <form action="get" onSubmit={handleInput}>
                    <TextField sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff'
                    }} height='76px' value={input} onChange={(e) => { setInput(e.target.value.toLowerCase()) }} placeholder="Search Exercises" type={'text'} />
                    <Button onClick={handleInput} className="search-btn" sx={{
                        bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: "absolute", right: '0'
                    }}>Search</Button>
                </form>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <SliderList data={list} bodyPart={bodyPart} setBodyPart={setBodyPart} setInput={setInput} handleInput={handleInput} isBodyParts />
            </Box>
        </Stack>
    )
}
export default SearchEngine
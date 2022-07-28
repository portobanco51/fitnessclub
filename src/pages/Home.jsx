import { Box } from '@mui/material';
import { useState } from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchEngine from '../components/SearchEngine';

const Home = () => {
    const [search, setSearch] = useState([])
    const [bodyPart, setBodyPart] = useState('all')

    return (
        <Box>
            <HeroBanner />
            <SearchEngine setSearch={setSearch} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setSearch={setSearch} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    )
}
export default Home
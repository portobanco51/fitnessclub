import { Box } from '@mui/material';
import { useState } from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchEngine from '../components/SearchEngine';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchEngine />
            <Exercises />
        </Box>
    )
}
export default Home
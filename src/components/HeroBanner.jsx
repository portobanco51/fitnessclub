import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} display='flex' flexDirection='column' position='relative' p='20px' >

            <Typography sx={{ textAlign: { lg: 'left', md: 'left', xs: 'center' } }} color='#ff2625' fontSize='1.625rem' fontWeight='600'>
                Fitness Club
            </Typography>

            <Typography fontWeight={'700'} sx={{ fontSize: { lg: '44px', xs: '40px' }, textAlign: { lg: 'left', md: 'left', xs: 'center' } }} mb='23px' mt='30px' >
                Sweat, Smile <br /> and Repeat
            </Typography>

            <Typography sx={{ textAlign: { lg: 'left', md: 'left', xs: 'center' } }} fontSize={'22px'} lineHeight='35px' mb={4}>
                Check out the most effective exercises
            </Typography>

            <Button variant='contained' href='#search' color='error' sx={{ backgroundColor: '#ff2625', padding: '10px', width: '12rem', alignSelf: { lg: 'start', md: 'start', xs: 'center' } }} >Explore Exercises</Button>

            <Typography color={'#ff2625'} fontWeight='600' sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' }
            }} fontSize='200px'>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
        </Box >
    )
}
export default HeroBanner
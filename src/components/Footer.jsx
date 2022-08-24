import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Footer = () => {
    return (
        <Box my='1rem'>
            <Stack className='footer-container' gap='0.5rem' alignItems='center' my='1rem'>
                <a href="#top"><img className='footer-icon' src={Logo} alt="logo" my='3rem' width='60px' /></a>
                <Typography variant='h5' my='1rem'>
                    A club for <span style={{ color: '#ff2625', textDecoration: 'underline' }} >Health & Wellness</span> 💗
                </Typography>
            </Stack>
        </Box >
    )
}
export default Footer
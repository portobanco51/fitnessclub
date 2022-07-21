import { Stack } from '@mui/material'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    return (
        <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '7.63rem', xs: '2.5rem' }, mt: { sm: '2rem', xs: '1.25rem' }, justifyContent: 'none' }} px='1.25rem'>
            <Link to='/'>
                <img className='logo_img' src={Logo} alt="logo" />
            </Link>
            <Stack direction='row' gap='40px' fontSize="24px" alignItems='flex-end'>
                <Link to='/' className='Nav_home'>Home</Link>
                <a href="#exercises" className='Nav_exercises'>Exercises</a>
            </Stack>
        </Stack>
    )
}
export default Navbar
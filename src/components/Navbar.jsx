import { Stack } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
    let navigate = useNavigate()
    return (
        <Stack direction='row' alignItems='center' justifyContent='' sx={{ gap: { sm: '7.63rem', xs: '2.5rem' }, mt: { sm: '2rem', xs: '1.25rem' }, justifyContent: { lg: 'start', md: 'start', xs: 'center' } }} px='1.25rem'>
            <Link to='/'>
                <img id='top' className='logo_img' src={Logo} alt="logo" />
            </Link>
            <Stack direction='row' gap='40px' fontSize="24px" alignItems='flex-end'>
                <Link to='/' className='Nav_home'>Home</Link>
                <a onClick={() => { navigate('/'); }} href="#exercises" className='Nav_exercises'>Exercises</a>
            </Stack>
        </Stack>
    )
}
export default Navbar
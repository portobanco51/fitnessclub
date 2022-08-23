import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png';
import IconBack from '../assets/icons/back.png';
import IconCardio from '../assets/icons/cardio.png';
import IconChest from '../assets/icons/chest.png';
import IconLA from '../assets/icons/lowerarms.png';
import IconLL from '../assets/icons/lowerlegs.png';
import IconNeck from '../assets/icons/neck.png';
import IconShould from '../assets/icons/shoulders.png';
import IconUA from '../assets/icons/upperarms.png';
import IconUL from '../assets/icons/upperlegs.png';
import IconWaist from '../assets/icons/waist.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack type="button" alignItems="center" justifyContent="center" className="bodyPart-card" sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: 'rgba(200, 200, 200, 0.3)',
            borderRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '30px'
        }}
            onClick={(e) => {
                setBodyPart(item);
                window.scrollTo({ top: 1300, left: 100, behavior: 'smooth' })
            }}
        >
            <img src={item === 'all' ? Icon : Icon && item === 'back' ? IconBack : Icon && item === 'cardio' ? IconCardio : Icon && item === 'chest' ? IconChest : Icon && item === 'lower arms' ? IconLA : Icon && item === 'lower legs' ? IconLL : Icon && item === 'neck' ? IconNeck : Icon && item === 'shoulders' ? IconShould : Icon && item === 'upper arms' ? IconUA : Icon && item === 'upper legs' ? IconUL : Icon && item === 'waist' ? IconWaist : Icon} alt="dumbbell" style={{
                width: '8rem', height: '8rem'
            }} />
            <Typography textTransform={'capitalize'} fontWeight={'bold'} fontSize='24px' color='red' >{item}</Typography>
        </Stack >
    )
}
export default BodyPart
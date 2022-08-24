import { Typography, Stack, Button } from '@mui/material';
import ImgBody from '../assets/icons/body-part.png'
import ImgTarget from '../assets/icons/target.png'
import ImgEquip from '../assets/icons/equipment.png'


const Detailed = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraInfo = [
        {
            icon: ImgBody,
            name: bodyPart
        },
        {
            icon: ImgTarget,
            name: target
        },
        {
            icon: ImgEquip,
            name: equipment
        }
    ]


    return (
        <Stack className='detail-hero' gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', pt: '5rem', alignItems: { lg: 'start', xs: 'center' } }} >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' }, alignItems: { lg: 'unset', xs: 'center' } }} >
                <Typography fontWeight='bold' variant='h3' textTransform='capitalize' >{name}</Typography>
                <Typography maxWidth='50vh' variant='h6'  >Exercises keep you strong, <b>{name}</b> is one of the best exercises to target your <b>{target}.</b><br /> It will help you improve your mood and gain energy.
                </Typography>
                {extraInfo.map((i, index) => (
                    <Stack key={index} direction='row' gap='24px' alignItems='center'>
                        <Button variant='outlined' sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }} >
                            <img src={i.icon} alt={i.name} />
                        </Button>
                        <Typography variant='h5' textTransform='capitalize'>
                            {i.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack >
    )
}
export default Detailed
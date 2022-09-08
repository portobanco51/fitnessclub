import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if (!exerciseVideos.length) return <Loader />
    return (
        <Box sx={{ mt: { lg: '6.5rem', xs: '4rem' } }} p='20px' >
            <Typography variant='h3' mb='4rem' textAlign='center'>
                📱 Check some <a href={`https://www.youtube.com/results?search_query=${name}`} target='_blank' rel='noreferrer' style={{ color: '#ff2625', textTransform: 'capitalize', textDecoration: 'underline' }}>{name}</a> exercise videos! 📺
            </Typography>
            <Stack justifyContent='center' flexWrap=' wrap' alignItems='center' sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
            >
                {exerciseVideos?.slice(0, 4).map((v, i) => (
                    <a key={i} className='exercise-video' href={`https://www.youtube.com/watch?v=${v.video.videoId}`} target='_blank' rel='noreferrer'>
                        <img className='video-img' src={v.video.thumbnails[0].url} alt={v.video.title} />
                        <Box>
                            <Typography textAlign='left' variant='h5' color='#000' fontWeight='bold'>
                                {v.video.title}
                            </Typography><br /><hr color='#000' />
                            <Typography mt='0.3rem' textAlign='right' variant='h6' fontSize='15px' color='#000'>
                                by {v.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}

            </Stack>
        </Box >
    )
}
export default ExerciseVideos
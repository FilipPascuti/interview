import { Box, Paper } from '@mui/material';
import SideBar from '@components/sideBar';
import WeatherDetailsPanel from '@components/weatherDetailsPanel';

const Content = () => (
    <Box
        sx={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            gap: '2rem',
            boxSizing: 'border-box',
            p: 2,
        }}
    >
        <Paper
            elevation={5}
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2.8rem',
            }}
        >
            <SideBar />
        </Paper>
        <Paper
            elevation={5}
            sx={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2.8rem',
                overflowX: 'hidden',
            }}
        >
            <WeatherDetailsPanel />
        </Paper>
    </Box>
);

export default Content;

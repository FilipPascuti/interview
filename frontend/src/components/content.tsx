import { Paper } from '@mui/material';
import SideBar from '@components/sideBar';
import WeatherDetailsPanel from '@components/weatherDetailsPanel';

const Content = () => (
    <div className="flex h-screen w-screen gap-8 box-border p-4">
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
    </div>
);

export default Content;

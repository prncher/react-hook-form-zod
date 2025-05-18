import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
// import MuiAppBar,
// { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './App.css'
import {
    Box,
    CssBaseline,
    IconButton,
    Drawer,
    Divider,
    Stack
} from '@mui/material';

const drawerWidth = 240;

const Main = styled(Stack, { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme }) => ({
    flexGrow: 1,
//    width: `50%`,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));

/*
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));
*/

const AppBar = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    padding: theme.spacing(2, 1),
    top: 0,
    left: 0
}));

const DrawerHeader = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    // display: 'flex',
    // alignItems: 'end',
    padding: theme.spacing(1, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
}));


function LeftRightPanels({ leftPanel, children, onOpen }: {
    leftPanel: React.ReactNode;
    children: React.ReactNode;
    onOpen: (open:boolean) => void;
}) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar>
                <ChevronRightIcon 
                sx={[
                    {
                        mr: 2,
                    },
                    open && { display: 'none' },
                ]}
                onClick={() => {
                    onOpen(true);
                    setOpen(true);
                }} />
            </AppBar>
            {/* <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Enter details
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                {/* <div style={{
            position: 'absolute',
        }}>
            <ChevronRightIcon />
        </div> */}

                <DrawerHeader>
                    <IconButton onClick={() => {
                        onOpen(false);
                        setOpen(false);
                    }}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                {/*<Divider />*/}
                {leftPanel}
                <Divider />
            </Drawer>
            <Main open={open}>
                {children}
            </Main>
        </Box>
    );
}

export default LeftRightPanels

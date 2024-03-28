import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import resume from '../resume';
import Me from './Me';
import About from './About';
import Project from './Project';
import Experience from './Experience';
import { ButtonBase, Typography, useMediaQuery } from '@mui/material';


export default function ResumeGrid() {
    const isSmallScreen = useMediaQuery('(max-width:900px)');

    const openResume = () => {
        window.open('/Brenden Arias Software Engineer Resume 03-24.pdf', '_blank');
    };

    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: '1200px',
            marginTop: '10vh',
            marginBottom: '10vh',
            marginLeft: { xs: '5vh', md: '10vh' },
            marginRight: { xs: '5vh', md: '10vh' },
        }}>
            <Grid container spacing={8} sx={{ minWidth: '100%' }}>
                <Grid item xs={12} md={6}>
                    <Me resumeData={resume} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box id='about'>
                        {isSmallScreen &&
                            <Typography variant='body1' fontWeight='bold' sx={{
                                marginBottom: 2,
                            }}>
                                About
                            </Typography>
                        }
                        <About resumeData={resume} />
                    </Box>
                    <Box id='projects' sx={{ marginBottom: 12 }}>
                        {isSmallScreen &&
                            <Typography variant='body1' fontWeight='bold' sx={{
                                marginTop: 5,
                            }}>
                                Projects
                            </Typography>
                        }
                        {resume.projects.map((project, index) => (
                            <Project
                                key={index}
                                project={project}
                            />
                        ))}
                    </Box>
                    <Box id='experience' sx={{ marginBottom: 12 }}>
                        {isSmallScreen &&
                            <Typography variant='body1' fontWeight='bold' sx={{
                                marginBottom: 2,
                            }}>
                                Experience
                            </Typography>
                        }
                        {resume.experience.map((experience, index) => (
                            <Experience experience={experience} key={index} />
                        ))}
                        <ButtonBase onClick={openResume}>
                            <Typography variant='body1' fontWeight='bold' sx={{
                                marginTop: 5,
                                letterSpacing: '0px',
                                transition: 'letter-spacing 0.3s ease-in-out',
                                '&:hover': { letterSpacing: '2px' }
                            }}>
                                View Resume →
                            </Typography>
                        </ButtonBase>
                    </Box>
                    <Typography variant='p'>
                        Strongly guided design from
                        <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}> Brittany Chiang's v4 Protfolio</span>.
                        Developed and deployed by yours truly.
                        Built with <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}>React </span>
                        and hosted on <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}>Render</span>.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
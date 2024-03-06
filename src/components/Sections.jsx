import React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

export default function Sections() {
    const styles = {
        meImg: {
            maxWidth: '80%',
            height: 'auto',
            borderRadius: '10%'
        }
    }

    return (
        <Box sx={{ marginTop: 5, marginBottom: 5 }}>
            <Box>
                <ButtonBase>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Typography variant='body1' fontWeight='bold' sx={{
                            marginBottom: 1,
                            letterSpacing: '0px',
                            transition: 'letter-spacing 0.3s ease-in-out',
                            '&:hover': { letterSpacing: '2px' }
                        }}>
                            About →
                        </Typography>
                    </ScrollLink>
                </ButtonBase>
            </Box>
            <Box>
                <ButtonBase>
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Typography variant='body1' fontWeight='bold' sx={{
                            marginBottom: 1,
                            letterSpacing: '0px',
                            transition: 'letter-spacing 0.3s ease-in-out',
                            '&:hover': { letterSpacing: '2px' }
                        }}>
                            Projects →
                        </Typography>
                    </ScrollLink>
                </ButtonBase>
            </Box>
            <Box>
                <ButtonBase>
                    <ScrollLink
                        to="experience"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <Typography variant='body1' fontWeight='bold' sx={{
                            marginBottom: 1,
                            letterSpacing: '0px',
                            transition: 'letter-spacing 0.3s ease-in-out',
                            '&:hover': { letterSpacing: '2px' }
                        }}>                            
                            Experience →
                        </Typography>
                    </ScrollLink>
                </ButtonBase>
            </Box>
        </Box >
    );
}

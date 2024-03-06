import Sections from './Sections';
import Box from '@mui/material/Box';
import Socials from './Socials';
import Skills from './Skills';
import { Typography, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';


export default function Me({ resumeData }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:900px)');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 350) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        meImg: {
            maxWidth: '80%',
            height: 'auto',
            borderRadius: '10%'
        }
    }

    return (
        <Box>
            <img src="/me.PNG" alt="Brenden with his dog" style={styles.meImg} />
            <Box sx={{
                position: { md: isScrolling ? 'fixed' : 'relative' },
                top: { md: isScrolling ? '5vh' : '' },
                maxWidth: { md: '500px' },
                marginTop: 4,
                transition: 'top 0.7s ease-in-out',
            }}>
                <Typography variant="h4" sx={{ fontWeight: 'lighter' }}>
                    Hello 👋 I'm,
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Brenden Arias
                </Typography>
                <Typography variant="p" gutterBottom>
                    Thanks for stopping by. I like to build simply beautiful things with:
                </Typography>
                <Skills skills={resumeData.skills} />
                {!isSmallScreen && <Sections />}
                <Socials />
            </Box>
        </Box >

    );
}
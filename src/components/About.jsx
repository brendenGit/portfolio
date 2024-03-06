import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


export default function About() {
    return (
        <Box>
            <Typography variant="body1" gutterBottom sx={{color: 'rgba(210, 210, 210)'}}>
                Hey there, I'm Brenden a 
                <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}> Fullstack engineer </span> 
                based in <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}>San Francisco</span>. 
                I love crafting design-driven applications that focus on user experience, 
                using modern frameworks like React and languages like JavaScript. 
                Whether it's building RESTful APIs with Node.js or styling with Material UI, 
                I enjoy bringing ideas to life with code.
                <br /><br />
                In my projects, I strive for seamless user experiences and faster load times. For example, 
                in Skillet, a web app for searching and cooking recipes, I implemented 
                <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}> pagination</span> for 
                fetching recipes from the Spoonacular API, ensuring a smooth experience across different 
                screen sizes.
                <br /><br />
                Outside of coding, you can find me practicing Muay Thai, shredding the slopes on my snowboard, 
                hitting the beach with my dog, or gaming with friends. If you're looking for a developer who's
                not only skilled but also passionate about 
                <span style={{ color: 'rgba(46, 204, 113)', fontWeight: 'bold' }}> creating meaningful experiences</span> 
                , I'd love to chat!
            </Typography>
        </Box>

    );
}


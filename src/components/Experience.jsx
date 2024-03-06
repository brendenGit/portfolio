import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';


export default function Experience({ experience }) {
    return (
        <ButtonBase component="a" href={`${experience.url}`} target="_blank">
            <Paper
                sx={{
                    p: 4,
                    marginTop: 6,
                    maxWidth: 600,
                    flexGrow: 1,
                    color: 'white',
                    backgroundColor: 'rgba(46, 204, 113, 0.03)',
                    textAlign: 'left',
                    borderRadius: 5,
                    transition: 'background-color 0.3s',
                    '&:hover': {
                        backgroundColor: 'rgba(46, 204, 113, 0.1)'
                    }
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="subtitle1" component="div" sx={{ fontSize: '0.8rem' }}>
                            {experience.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h6" component="div">
                                    {experience.company}
                                </Typography>
                                <Box sx={{ marginBottom: 2 }}>
                                    {experience.positions.map((position, index) => (
                                        <Typography 
                                            variant="body2" 
                                            sx={{ color: 'RGB(180, 180, 180)' }}
                                            key={index}
                                        >
                                            {position}
                                        </Typography>

                                    ))}
                                </Box>
                                {experience.responsibilities.map((responsibility, index) => (
                                    <Typography variant="body2" gutterBottom key={index}>
                                        {responsibility}
                                    </Typography>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
    );
}
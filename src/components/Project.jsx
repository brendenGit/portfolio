import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Skills from './Skills';
import { styled } from '@mui/material/styles';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Project({ project }) {
    return (
        <ButtonBase component="a" href={`${project.url}`} target="_blank">
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
                        <Img alt={`${project.name} project image`} src={`${project.thumbnail}`} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {project.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <Skills skills={project.skills} />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ButtonBase } from '@mui/material';


export default function Socials() {
    return (
        <Box sx={{ width: 200, marginTop: { md: 28, xs: 3 } }}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" flexWrap="wrap">
                <ButtonBase component="a" href="https://www.linkedin.com/in/brenden-arias/" target="_blank">
                    <LinkedInIcon />
                </ButtonBase>
                <ButtonBase component="a" href="https://github.com/brendenGit" target="_blank">
                    <GitHubIcon />
                </ButtonBase>
                <ButtonBase component="a" href="https://www.instagram.com/brenden_arias/" target="_blank">
                    <InstagramIcon />
                </ButtonBase>
            </Stack>
        </Box>
    );
}
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function Skills({ skills }) {
    return (
        <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', marginTop: 1 }}>
            {skills.map((skill, index) => (
                <Box sx={{ marginTop: 1, marginRight: 1 }} key={index}>
                    <Chip variant="outlined" color="success" label={`${skill}`} />
                </Box>
            ))}
        </Box>
    );
}
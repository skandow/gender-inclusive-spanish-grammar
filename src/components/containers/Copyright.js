import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
        <Box mt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
        
                Gender Inclusive Spanish Grammar
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
      </Box>
    );
  }

export default Copyright
import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = () => {
  return (
    <Box id="exercises" sx={{ mt: { lg: '110px', xs: '70px' } }} p="20px">  
      <Typography variant="h3" mb="46px">
        Exercises
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        <Box sx={{ flexBasis: '100%', textAlign: 'center' }}>
          <Typography variant="h5" mb="25px">
            Showing Results
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default Exercises

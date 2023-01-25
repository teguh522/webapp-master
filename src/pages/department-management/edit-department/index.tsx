// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const EditDepartment = () => {
  return (
    <Card>
      <CardHeader title='Edit Department' titleTypographyProps={{ textAlign: 'center'}}/>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5} sx={{display: 'flex', alignItems: 'center'}}>
            <Grid item xs={12} sm={3}>
              <label htmlFor='departmentName'>Department Name</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth id='departmentName' sx={{padding: 0}} required/>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='Code'>Code</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth id='Code' sx={{padding: 0}} required/>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'end'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant='contained' color='secondary' sx={{margin: '5px'}}>Cancel</Button>
                  <Button variant='contained' color='primary' sx={{margin: '5px'}}>Save</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default EditDepartment
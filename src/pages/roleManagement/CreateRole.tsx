// ** Other Import
import { Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'

const CreateRole = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader />
          <Typography variant='h4' sx={{ fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>
            Create Role
          </Typography>
          <CardContent>
            <Grid container alignItems='center' spacing={2} sx={{ paddingRight: 15, paddingLeft: 15 }}>
              <Grid item xs={4}>
                <p>Role Name</p>
              </Grid>
              <Grid item xs={8}>
                <TextField required fullWidth size='small' id='outlined-required' />
              </Grid>
              <Grid item xs={4}>
                <p>Code</p>
              </Grid>
              <Grid item xs={8}>
                <TextField required fullWidth size='small' id='outlined-required' />
              </Grid>
              <CardHeader />
              <Grid container spacing={2} justifyContent={'right'}>
                <Grid item>
                  <Button variant='contained' color='secondary'>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CreateRole

// ** Other Import
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Select,
  MenuItem,
  Typography
} from '@mui/material'
import { useState } from 'react'

const EditRole = () => {
  const [permission,setPermission]=useState([])
  const [rolePermission,setRolePermission]=useState([])
  
  const listMenu = [
    {
      value: "user_management",
      deskripsi: "User Management"
    },
    {
      value: "role_management",
      deskripsi: "Role Management"
    },
  ]
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader />
          <Typography variant='h4' sx={{ fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>
            Edit Role
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
              {/* <Grid item xs={4}>
                <p>Menu</p>
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size='small'>
                  <MenuItem value={'role1'}>Role1</MenuItem>
                  <MenuItem value={'role2'}>Role2</MenuItem>
                  <MenuItem value={'role3'}>Role3</MenuItem>
                </Select>
              </Grid> */}
              <Grid item xs={4}>
                <p>Status</p>
              </Grid>
              <Grid item xs={8}>
                <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
                  <FormControlLabel value='active' control={<Radio />} label='Active' />
                  <FormControlLabel value='Inactive' control={<Radio />} label='Inactive' />
                </RadioGroup>
              </Grid>
              <Grid item xs={4}>
                <p>Menu Permission</p>
              </Grid>
              <Grid item xs={8}>

              </Grid>
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

export default EditRole

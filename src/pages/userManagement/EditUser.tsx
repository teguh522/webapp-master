// ** React Imports
import { ChangeEvent, MouseEvent, useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

// Custom Input
const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} autoComplete='off' />
})

const EditUser = () => {
  // ** States
  const [gender, setGender] = useState<string>('')
  const [Department, setDepartment] = useState<string>()
  const [Speciality, setSpeciality] = useState<string>()
  const [Role, setRole] = useState<string[]>([])
  const [Organization, setOrganization] = useState<string[]>([])
  const [birthDate, setBirthDate] = useState<Date | null | undefined>(null)

  // Handle Select
  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGender(event.target.value as string)
  }
  const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
    setDepartment(event.target.value as string)
  }
  const handleSpecialityChange = (event: SelectChangeEvent<string>) => {
    setSpeciality(event.target.value as string)
  }
  const handleRoleChange = (event: SelectChangeEvent<string[]>) => {
    setRole(event.target.value as string[])
  }
  const handleOrganizationChange = (event: SelectChangeEvent<string[]>) => {
    setOrganization(event.target.value as string[])
  }

  return (
    <Card>
      <CardHeader title='Edit User' titleTypographyProps={{ textAlign: 'center' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} sm={3}>
              <label htmlFor='fullname'>Fullname</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth id='fullname' sx={{ padding: 0 }} required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='username'>Username</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth id='username' sx={{ padding: 0 }} required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='email'>Email</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth id='email' type='email' sx={{ padding: 0 }} required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='phone'>Phone</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth id='phone' sx={{ padding: 0 }} required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='birthdate'>Birth Date</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <DatePicker
                selected={birthDate}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='birthdate'
                onChange={(date: Date) => setBirthDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='gender'>Gender</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                fullWidth
                value={gender}
                onChange={handleGenderChange}
                id='gender'
                input={<OutlinedInput id='select-gender' />}
              >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='address'>Address</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth multiline minRows={3} id='address' sx={{ padding: 0 }} required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='employee-numb'>Employee No</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField fullWidth type='number' id='employee-numb' sx={{ padding: 0 }} required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='department'>Department</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                fullWidth
                value={Department}
                onChange={handleDepartmentChange}
                id='department'
                input={<OutlinedInput id='select-department' />}
              >
                <MenuItem value='Department1'>Department1</MenuItem>
                <MenuItem value='Department2'>Department2</MenuItem>
                <MenuItem value='Department3'>Department3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='speciality'>Speciality</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                fullWidth
                value={Speciality}
                onChange={handleSpecialityChange}
                id='speciality'
                input={<OutlinedInput id='select-speciality' />}
              >
                <MenuItem value='Speciality1'>Speciality1</MenuItem>
                <MenuItem value='Speciality2'>Speciality2</MenuItem>
                <MenuItem value='Speciality3'>Speciality3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='role'>Role</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                fullWidth
                multiple
                value={Role}
                onChange={handleRoleChange}
                id='department'
                input={<OutlinedInput id='select-role' />}
              >
                <MenuItem value='Role1'>Role1</MenuItem>
                <MenuItem value='Role2'>Role2</MenuItem>
                <MenuItem value='Role3'>Role3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='organization'>Organization</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Select
                fullWidth
                multiple
                value={Organization}
                onChange={handleOrganizationChange}
                id='organization'
                input={<OutlinedInput id='select-organization' />}
              >
                <MenuItem value='Organization1'>Organization1</MenuItem>
                <MenuItem value='Organization2'>Organization2</MenuItem>
                <MenuItem value='Organization3'>Organization3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
              <label htmlFor='status'>Status</label>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RadioGroup row name='status' id='status'>
                <FormControlLabel value='Active' control={<Radio />} label='Active' />
                <FormControlLabel value='Inactive' control={<Radio />} label='Inactive' />
              </RadioGroup>
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
                  <Button variant='contained' color='secondary' sx={{ margin: '5px' }}>
                    Cancel
                  </Button>
                  <Button variant='contained' color='primary' sx={{ margin: '5px' }}>
                    Save
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default EditUser

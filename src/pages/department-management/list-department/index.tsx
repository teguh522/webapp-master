// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/main/@core/context/settingsContext'

// ** Other Import
import Swal from 'sweetalert2'
import { Pagination } from '@mui/material'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

interface Data {
  id: number,
  departmentName: string,
  code: string
}

const rows = [
  {
    id: 1,
    departmentName: 'India',
    code: 'IN'
  },
  {
    id: 2,
    departmentName: 'America',
    code: 'IN'
  },
  {
    id: 3,
    departmentName: 'Indonesia',
    code: 'IN'
  },
  {
    id: 4,
    departmentName: 'Singapore',
    code: 'IN'
  }
]

const Departmentlist = (props: Props) => {
  // ** Props
  const { hidden, toggleNavVisibility } = props

  // ** States
  const [page, setPage] = useState<number>(0)
  const [allData, setAllData] = useState(rows)

  const confirmDelete = (row:any) => {
    Swal.fire({
      title: 'Are you sure want to delete this department?',
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      icon: 'warning'
    }).then((result) => {
      if(result.isConfirmed){
        const deletedeparment = allData.map((data) => {
          if(data.id === row.id){
            rows.splice(row.id-1,1)
            return data  // eslint-disable-line newline-before-return
          }
          else {
            return data
          }
        })
        setAllData(deletedeparment);
      }
    })
  }

  return (
    <div>
      <h1>Department Management</h1>
      <Box sx={{marginY: "10px", padding: "10px", width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {/* Search Bar */}
        <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          {hidden ? (
            <IconButton
              color='inherit'
              onClick={toggleNavVisibility}
              sx={{ ml: -2.75, mr: 3.5  }}
            >
              <Menu />
            </IconButton>
          ) : null}
          <TextField
            size='small'
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 }, width: "500px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Magnify fontSize='small' />
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Add User Button */}
          <Button variant='contained' href='/department-management/create-department'>
            Add
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell>
                    Department Name
                </TableCell>
                <TableCell align='center' sx={{width: '300px'}}>
                    Code
                </TableCell>
                <TableCell align='center'  sx={{width: '200px'}}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: Data) => (
              <TableRow hover key={row.departmentName} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{row.departmentName}</TableCell>
                <TableCell align='center'>{row.code}</TableCell>
                <TableCell align='right'>
                      <Button size='small' variant='contained' href='/department-management/edit-department' sx={{color: "white!important"}}>
                          Edit
                      </Button>
                      <Button variant='contained' color='error' size='small' onClick={() => confirmDelete(row)} sx={{marginX: "5px", color: "white!important"}}>
                          Delete
                      </Button>
                    </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{display: 'flex', justifyContent: 'end', padding: '5px'}}>
          <Pagination count={10}/>
        </Box>
      </Paper>
    </div>
  )
}

export default Departmentlist
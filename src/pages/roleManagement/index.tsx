// ** React Imports
import { useState } from 'react'

import { useRouter } from 'next/router'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
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
import { GlobalStyles, Pagination, Typography } from '@mui/material'

interface Column {
  id: 'role' | 'code' | 'status'
  label: string
  minWidth?: number
  align?: 'center'
  format?: (value: number) => string
}

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const columns: readonly Column[] = [
  { id: 'role', label: 'Role' },
  {
    id: 'code',
    label: 'Code',
    align: 'center'
  },
  {
    id: 'status',
    label: 'Status',
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US')
  }
]

interface Data {
  id: number
  role: string
  code: string
  status: number
}

const rows = [
  {
    id: 1,
    role: 'Doctor',
    code: 'DO',
    status: 1
  },
  {
    id: 2,
    role: 'Nurse',
    code: 'NU',
    status: 2
  },
  {
    id: 3,
    role: 'Radiografer',
    code: 'RAD',
    status: 1
  },
  {
    id: 4,
    role: 'Tocologist',
    code: 'TOC',
    status: 2
  },
  {
    id: 5,
    role: 'Physiotherapy',
    code: 'PHY',
    status: 2
  }
]

const RoleList = (props: Props) => {
  // ** Props
  const { hidden, toggleNavVisibility } = props

  // ** States
  const [allData, setAllData] = useState(rows)

  const router = useRouter()

  const confirmDelete = (row: any) => {
    Swal.fire({
      title: 'Are you sure want to delete this role?',
      text: 'This will remove user and all data associated with it',
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      icon: 'warning'
    }).then(result => {
      if (result.isConfirmed) {
        const deleteRole = allData.map(data => {
          if (data.id === row.id) {
            rows.splice(row.id - 1, 1)
            return data // eslint-disable-line newline-before-return
          } else {
            return data
          }
        })
        setAllData(deleteRole)
      }
    })
  }

  return (
    <div>
      <GlobalStyles styles={{ btn: { color: 'whitesmoke' } }} />
      <Typography variant='h4' sx={{ fontWeight: 600, marginBottom: 8 }}>
        Role Management
      </Typography>
      <Box
        sx={{
          marginY: '10px',
          padding: '10px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Search Bar */}
        <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          {hidden ? (
            <IconButton color='inherit' onClick={toggleNavVisibility} sx={{ ml: -2.75, mr: 3.5 }}>
              <Menu />
            </IconButton>
          ) : null}
          <TextField
            size='small'
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 }, width: '500px' }}
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
          <Button variant='contained' onClick={() => router.push('/roleManagement/CreateRole')}>
            Add Role
          </Button>
        </Box>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: Data) => (
                <TableRow hover key={row.role} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>{row.role}</TableCell>
                  <TableCell align='center'>{row.code}</TableCell>
                  <TableCell align='center'>
                    {row.status == 1 ? (
                      <Chip color='success' label='ACTIVE' sx={{ height: 24, fontSize: '0.75rem' }} />
                    ) : (
                      <Chip color='error' label='INACTIVE' sx={{ height: 24, fontSize: '0.75rem' }} />
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    <Button
                      size='small'
                      variant='contained'
                      href='/roleManagement/EditRole'
                      sx={{ color: 'white!important' }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant='contained'
                      color='error'
                      size='small'
                      onClick={() => confirmDelete(row)}
                      sx={{ marginX: '5px', color: 'white!important' }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'end', padding: '5px' }}>
          <Pagination count={10} />
        </Box>
      </Paper>
    </div>
  )
}

export default RoleList

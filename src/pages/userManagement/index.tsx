// ** React Imports
import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
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
import { GlobalStyles, Stack, Typography } from '@mui/material'

interface Column {
  id: 'fullname' | 'username' | 'emplnumb' | 'status'
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
  { id: 'fullname', label: 'Fullname', minWidth: 170 },
  { id: 'username', label: 'Username', minWidth: 100, align: 'center' },
  {
    id: 'emplnumb',
    label: 'Employee Number',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 50,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US')
  }
]

interface Data {
  id: number
  fullname: string
  username: string
  emplnumb: number
  status: number
}

const rows = [
  {
    id: 1,
    fullname: 'India',
    username: 'IN',
    emplnumb: 123123,
    status: 1
  },
  {
    id: 2,
    fullname: 'America',
    username: 'IN',
    emplnumb: 1324171354,
    status: 2
  },
  {
    id: 3,
    fullname: 'Indonesia',
    username: 'IN',
    emplnumb: 1324171354,
    status: 1
  },
  {
    id: 4,
    fullname: 'Singapore',
    username: 'IN',
    emplnumb: 1324171354,
    status: 2
  }
]

const UserList = (props: Props) => {
  // ** Props
  const { hidden, toggleNavVisibility } = props

  const router = useRouter()

  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [allData, setAllData] = useState(rows)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const confirmSuspend = (row: any) => {
    Swal.fire({
      title: 'Are you sure want to suspend this user?',
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      icon: 'info'
    }).then(result => {
      if (result.isConfirmed) {
        const suspendUser = allData.map(data => {
          if (data.id === row.id) {
            data.status = 2
            return data // eslint-disable-line newline-before-return
          } else {
            return data
          }
        })
        setAllData(suspendUser)
      }
    })
  }

  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure want to delete this user?',
      text: 'This will remove user and all data associated with it',
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      icon: 'info'
    }).then(result => {
      if (result.isConfirmed) {
      }
    })
  }

  return (
    <div>
      <GlobalStyles styles={{ btn: { color: 'whitesmoke' } }} />
      <Typography variant='h4' sx={{ fontWeight: 600, marginBottom: 8 }}>
        User Management
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
          <Button variant='contained' onClick={() => router.push('userManagement/AddUser')}>
            Add User
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
                <TableRow hover key={row.fullname} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>{row.fullname}</TableCell>
                  <TableCell align='center'>{row.username}</TableCell>
                  <TableCell align='center'>{row.emplnumb}</TableCell>
                  <TableCell align='center'>
                    {row.status == 1 ? (
                      <Button onClick={() => confirmSuspend(row)}>
                        <Chip color='success' label='ACTIVE' sx={{ height: 24, fontSize: '0.75rem' }} />
                      </Button>
                    ) : (
                      <Chip color='error' label='SUSPENDED' sx={{ height: 24, fontSize: '0.75rem' }} />
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    <Stack sx={{ display: 'flex', justifyContent: 'center' }} direction='row' spacing={1}>
                      <Chip label='Edit' color='primary' onClick={() => router.push('userManagement/EditUser')} />
                      <Chip label='Delete' color='error' onClick={confirmDelete} />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default UserList

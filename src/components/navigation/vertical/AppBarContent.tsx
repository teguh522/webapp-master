// ** MUI Imports
import Box from '@mui/material/Box'

// ** Components
import UserDropdown from 'src/main/@core/layouts/components/shared-components/UserDropdown'

const AppBarContent = () => {

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent

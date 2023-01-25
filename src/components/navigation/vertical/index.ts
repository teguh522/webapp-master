// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/main/@core/layouts/types'
import { ViewListOutline } from 'mdi-material-ui'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'User Management',
      icon: AccountPlusOutline,
      path: '/userManagement'
    },
    {
      title: 'Role Management',
      icon: AccountCogOutline,
      path: '/roleManagement'
    },
    {
      title: 'Department Management',
      icon: ViewListOutline,
      path: '/department-management/list-department'
    }
  ]
}

export default navigation

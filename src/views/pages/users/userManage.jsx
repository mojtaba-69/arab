import { CSmartTable } from '@coreui/react-pro'
import {CAvatar,CBadge,CButton,CCardBody,CCollapse,
} from "@coreui/react" 
import { useState } from "react"
import Avatar1 from '../../../assets/images/avatars/1.jpg'
import Avatar2 from '../../../assets/images/avatars/2.jpg'
import Avatar3 from '../../../assets/images/avatars/3.jpg'



const UserManage = () => {
const [details, setDetails] = useState([])
const columns = [
  {
    key: 'avatar',
    label: '',
    filter: false,
    sorter: false,
  },
  {
    key: 'name',
    _style: { width: '20%' },
  },
  'registered',
  { 
    key: 'role',
    _style: { width: '20%' }
  },
  { 
    key: 'status',
    _style: { width: '20%' }
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    filter: false,
    sorter: false,
  },
]
const usersData = [
  {
    id: 1,
    name: 'نفیسه عرب',
    avatar: '1.jpg',
    registered: '1402/05/04',
    role: 'مدیر',
    status: 'Active',
  },
  {
    id: 2,
    name: 'زهرا ثالث',
    avatar: '2.jpg',
    registered: '2022/02/07',
    role: 'کاربر',
    status: 'Banned',
  },
  {
    id: 3,
    name: 'محمد احمدی',
    avatar: '3.jpg',
    registered: '2022/02/07',
    role: 'کارفرما',
    status: 'Inactive',
    _selected: true,
  },
  {
    id: 4,
    name: 'سمانه عزیزی',
    avatar: '4.jpg',
    registered: '2022/03/19',
    role: 'کارجو',
    status: 'Pending',
  },
  {
    id: 5,
    name: 'رضا داوودی',
    avatar: '5.jpg',
    registered: '2022/01/21',
    role: 'کارفرما',
    status: 'Active'
  },
  { 
    id: 6,
    name:'فرزانه رحمتی',
    avatar: '6.jpg',
    registered: '2022/01/01',
    role: 'کارجو',
    status: 'Active'
  },
  {
    id: 7,
    name: 'جواد محمدی',
    avatar: '7.jpg',
    registered: '2022/02/07',
    role: 'کارجو',
    status: 'Banned',
    _selected: true,
  },
  
]
const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'success'
    case 'Inactive':
      return 'secondary'
    case 'Pending':
      return 'warning'
    case 'Banned':
      return 'danger'
    default:
      return 'primary'
  }
}



const toggleDetails = (index) => {
  const position = details.indexOf(index)
  let newDetails = details.slice()
  if (position !== -1) {
    newDetails.splice(position, 1)
  } else {
    newDetails = [...details, index]
  }
  setDetails(newDetails)
}

    return (
        <CSmartTable
          activePage={2}
          cleaner
          clickableRows
          columns={columns}
          columnFilter
          columnSorter
          footer
          items={usersData}
          itemsPerPageSelect
          itemsPerPage={5}
          pagination
          onFilteredItemsChange={(items) => {
            console.log(items)
          }}
          onSelectedItemsChange={(items) => {
            console.log(items)
          }}
          scopedColumns={{
            avatar: (item) => (
              <td>
                <CAvatar src={`../../assets/images/avatars/${item.avatar}`} />
                {/* <CAvatar src={Avatar1} /> */}
              </td>
            ),
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            
            show_details: (item) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(item.id)
                    }}
                  >
                    {details.includes(item.id) ? 'Hide' : 'Show'}
                  </CButton>
                </td>
              )
            },
            details: (item) => {
              return (
                <CCollapse visible={details.includes(item.id)}>
                  <CCardBody className="p-3">
                    <h4>{item.username}</h4>
                    <p className="text-muted">User since: {item.registered}</p>
                    <CButton size="sm" color="info">
                      User Settings
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-1">
                      Delete
                    </CButton>
                  </CCardBody>
                </CCollapse>
              )
            },
          }}
          selectable
          sorterValue={{ column: 'status', state: 'asc' }}
          tableFilter
          tableProps={{
            className: 'add-this-class',
            responsive: true,
            striped: true,
            hover: true,
          }}
          tableBodyProps={{
            className: 'align-middle'
          }}
        />
      );
}
 
export default UserManage;

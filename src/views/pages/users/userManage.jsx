import { CSmartTable } from '@coreui/react-pro'
import {CAvatar,CBadge,CButton,CCardBody,CCollapse,
} from "@coreui/react" 
import { useState } from "react"
import Avatar1 from '../../../assets/images/avatars/1.jpg'
// import Avatar2 from '../../../assets/images/avatars/2.jpg'
// import Avatar3 from '../../../assets/images/avatars/3.jpg'




const UserManage = () => {
const [details, setDetails] = useState([])

const columns = [
  {
    key: 'avatar',
    label: 'پروفایل',
    filter: false,
    sorter: false,
  },
  {
    key:'name',
    label : 'نام ونام خانوادگی',
    _style: { width: '20%' },
  },
  
  { 
    key: 'email',
    label : 'ایمیل',
    _style: { width: '30%' }
  },
  { 
    key: 'registered',
    label :"تاریخ" ,
    _style: { width: '15%' }
  },
  { 
    key: 'role',
    label : "نقش",
    _style: { width: '10%' }
  },
  { 
    key: 'status',
    label :"وضعیت" ,
    _style: { width: '10%' }
  },
  {
    key: 'show_details',
    label: 'عملیات',
    _style: { width: '1%' },
    filter: false,
    sorter: false,
  },
]
const usersData = [
  {
    id: 1,
    name: 'نفیسه عرب',
    email: 'nafiseharab@gmail.com',
    avatar: '1.jpg',
    registered: '1402/05/04',
    role: 'مدیر',
    status: 'فعال',
  },
  {
    id: 2,
    name: 'زهرا ثالث',
    email: 'nafiseharab@gmail.com',
    avatar: '2.jpg',
    registered: '1402/05/04',
    role: 'کاربر',
    status: 'غیرمجاز',
  },
  {
    id: 3,
    name: 'محمد احمدی',
    email: 'nafiseharab@gmail.com',
    avatar: '3.jpg',
    registered: '1402/05/04',
    role: 'کارفرما',
    status: 'غیرفعال',
    _selected: true,
  },
  {
    id: 4,
    name: 'سمانه عزیزی',
    email: 'nafiseharab@gmail.com',
    avatar: '4.jpg',
    registered: '1402/05/04',
    role: 'کارجو',
    status: 'درحال بررسی',
  },
  {
    id: 5,
    name: 'رضا داوودی',
    email: 'nafiseharab@gmail.com',
    avatar: '5.jpg',
    registered: '1402/05/04',
    role: 'کارفرما',
    status: 'فعال'
  },
  { 
    id: 6,
    name:'فرزانه رحمتی',
    email: 'nafiseharab@gmail.com',
    avatar: '6.jpg',
    registered: '1402/05/04',
    role: 'کارجو',
    status: 'فعال'
  },
  {
    id: 7,
    name: 'جواد محمدی',
    email: 'nafiseharab@gmail.com',
    avatar: '7.jpg',
    registered: '1402/05/04',
    role: 'کارجو',
    status: 'غیرمجاز',
    _selected: true,
  },
  {
    id: 8,
    name: 'سمانه عزیزی',
    email: 'nafiseharab@gmail.com',
    avatar: '4.jpg',
    registered: '1402/05/04',
    role: 'کارجو',
    status: 'درحال بررسی',
  },
  {
    id: 9,
    name: 'رضا داوودی',
    email: 'nafiseharab@gmail.com',
    avatar: '5.jpg',
    registered: '1402/05/04',
    role: 'کارفرما',
    status: 'فعال'
  },
  { 
    id: 10,
    name:'فرزانه رحمتی',
    email: 'nafiseharab@gmail.com',
    avatar: '6.jpg',
    registered: '1402/05/04',
    role: 'کارجو',
    status: 'فعال'
  },
  {
    id: 11,
    name: 'جواد محمدی',
    email: 'nafiseharab@gmail.com',
    avatar: '7.jpg',
    registered: '1402/05/04',
    role: 'کارجو',
    status: 'غیرمجاز',
    _selected: true,
  },
  
]



const getBadge = (status) => {
  switch (status) {
    case 'فعال':
      return 'success'
    case 'غیرفعال':
      return 'secondary'
    case 'درحال بررسی':
      return 'warning'
    case 'غیرمجاز':
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
      <>
      <h6>لیست کاربران</h6>
      <hr/>
      <div className='border'>
       
        <CSmartTable
          className='bg-light m-0'
          activePage={2}
          // cleaner
          clickableRows
          columns={columns}
          tableHeadProps={{ color: 'light' }}
          columnFilter
          columnSorter
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
                {/* <CAvatar src={`../../assets/images/avatars/${item.avatar}`} /> */}
                <CAvatar src={Avatar1} />
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
                    {details.includes(item.id) ? 'پنهان' : 'ویرایش'}
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
                      ویرایش
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-1">
                      حذف
                    </CButton>
                  </CCardBody>
                </CCollapse>
              )
            },
          }}
          selectable
          sorterValue={{ column: 'status', state: 'asc' }}
          // tableFilter
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
        </div>
        </>
      );
}

export default UserManage;

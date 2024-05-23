import { useDispatch,useSelector } from 'react-redux';
import{ 
    CSidebar,
    CSidebarBrand,
    CNavItem,CBadge,
    CNavGroup,
    CSidebarToggler,
    CSidebarNav,
    CNavTitle,
    CRow,
    CCol,
    CAvatar,
    CNavLink,
   
    } from '@coreui/react';
    import CIcon from '@coreui/icons-react';
import {cilSpeedometer ,cilCog,cilPowerStandby ,cilNewspaper,cilPeople,cilStorage} from '@coreui/icons';
import { Link } from 'react-router-dom';
import Avatar1 from '../../assets/images/avatars/1.jpg'



const AdminSidebar = () => {
 const dispatch = useDispatch()
 const unfolable = useSelector((state) => state.sidebarUnfolable)
 const sidebarshow = useSelector((state) => state.sidebarShow)
    return ( 
        <CSidebar 
        // className='bg-body'
        unfoldable ={unfolable}
        visible={sidebarshow}
        onVisibleChange={(visible) => {
          dispatch({type:'set' , sidebarshow : visible})
        }} >
  <CSidebarBrand >
    <h5 className='m-3'>پنل مدیریت</h5>
  </CSidebarBrand>
  <CNavItem className="mx-auto  d-flex flex-column gap-2 mt-3 align-items-center">
          <CAvatar src={Avatar1}  size="lg"/>
          <span>نام کاربری </span>
          <div className='d-flex text-secondary gap-2  mx-auto mt-1'>
          <CIcon icon={cilCog} />
          <CIcon icon={cilPowerStandby} />
          </div>
          </CNavItem>
        
        
  <CSidebarNav className="mt-4">
    <Link to={"/Dashbord"} className='link'>
    <CNavItem  className="d-flex px-2 grow-1 text-secondary">
      <CIcon customClassName="nav-icon text-secondary " icon={cilSpeedometer} />
      <span>داشبورد</span>
    </CNavItem>
    </Link>
    
   
    
    
    {/* مدیریت کاریران */}
    <div className='d-flex mt-2 '>
    <CIcon customClassName="nav-icon text-secondary my-auto " icon={cilPeople} />
    <CNavGroup  toggler="مدیریت کاربران" className='tex-secondary width-auto flex-fill'>
    
      <div className='d-flex  flex-column grow-1 me-5'>
     <Link to={'UrersForm'} className='link'>
     
     <CNavItem >ثبت کاربران</CNavItem>
     </Link>
      <Link to={'UserManage'} className='link  ' >
      <CNavItem> 
      ویرایش کاربران
      </CNavItem>
      </Link>
     </div>
    </CNavGroup>
    </div>
    
    {/*آگهی ها */}
    <div className='d-flex '>
    <CIcon customClassName="nav-icon text-secondary my-auto" icon={cilNewspaper} />
    <CNavGroup toggler="مدیریت آگهی ها" className='tex-secondary flex-fill'>
    <div className='d-flex  flex-column grow-1 me-5'>
      <Link to={"AdForm"} className='link'>
      <CNavItem>ثبت آگهی</CNavItem>
      </Link>
      
      <Link to={"AdManagement"} className='link'>
        <CNavItem >ویرایش آگهی ها</CNavItem>
      </Link>
      </div>
    </CNavGroup>
    </div>
    
    {/*آگهی ها */}
    <div className='d-flex '>
    <CIcon customClassName="nav-icon text-secondary my-auto" icon={cilNewspaper} />
    <CNavGroup toggler="مدیریت دسته های آگهی " className='tex-secondary flex-fill'>
    <div className='d-flex  flex-column grow-1 me-5'>
      <Link to={""} className='link'>
      <CNavItem >دسته بندی آگهی ها</CNavItem>
      </Link>
      
      <Link to={""} className='link'>
      <CNavItem >ویرایش دسته های آگهی</CNavItem>
      </Link>
      </div>
    </CNavGroup>
    </div>
    
    {/*درخواست ها */}
    {/* <CNavGroup toggler="مدیریت درخواست ها " className='tex-secondary mt-2 me-2'>
    <div className='d-flex  flex-column grow-1 me-5'>
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
      </div>
    </CNavGroup> */}

    {/*مقالات*/}
    {/* <CNavGroup toggler="مدیریت مقالات ">
    <div className='d-flex  flex-column grow-1 me-5'>
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
      </div>
    </CNavGroup> */}
   
  </CSidebarNav>
  <CSidebarToggler
        
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfolable })}
      />
</CSidebar>



     );
}
 
export default AdminSidebar;
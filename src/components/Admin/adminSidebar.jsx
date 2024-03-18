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
    CNavLink
    } from '@coreui/react';
    import CIcon from '@coreui/icons-react';
import {cilSpeedometer } from '@coreui/icons';




const AdminSidebar = () => {
 const dispatch = useDispatch()
 const unfolable = useSelector((state) => state.sidebarUnfolable)
 const sidebarshow = useSelector((state) => state.sidebarShow)
    return ( 
        <CSidebar 
        unfoldable ={unfolable}
        visible={sidebarshow}
        onVisibleChange={(visible) => {
          dispatch({type:'set' , sidebarshow : visible})
        }} >
  <CSidebarBrand className='shadow text-danger '>
    <h5 className='m-3'>پنل مدیریت</h5>
  </CSidebarBrand>
  <CSidebarNav>
    
    <CNavItem href='Dashbord' className="px-1">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      داشبورد
    </CNavItem>
   
    
    
    {/* مدیریت کاریران */}
    <CNavGroup toggler="مدیریت کاربران">
      <CNavItem  href='UserManage'> 
      {/* <CNavLink to="/userManage" component={UserManage}/> */}
 
      ویرایش کاربران
      </CNavItem>
      <CNavItem href='UrersForm'>کاربران</CNavItem>
    </CNavGroup>
    {/*آگهی ها */}
    <CNavGroup toggler="مدیریت آگهی ها">
      <CNavItem href="AdForm">ثبت آگهی</CNavItem>
      <CNavItem href="AdManagement">ویرایش آگهی ها</CNavItem>
    </CNavGroup>
    {/*آگهی ها */}
    <CNavGroup toggler="مدیریت دسته های آگهی ">
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
    </CNavGroup>
    {/*درخواست ها */}
    <CNavGroup toggler="مدیریت درخواست ها ">
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
    </CNavGroup>
    {/*مقالات*/}
    <CNavGroup toggler="مدیریت مقالات ">
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
    </CNavGroup>
    {/*دسته های مقاله*/}
    <CNavGroup toggler="مدیریت دسته های مقاله ">
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
    </CNavGroup>
    {/*دسته های مقاله*/}
    <CNavGroup toggler="مدیریت دسته های مقاله ">
      <CNavItem href="#">دسته بندی آگهی ها</CNavItem>
      <CNavItem href="#">ویرایش آگهی ها</CNavItem>
    </CNavGroup>
    <CNavItem> 
    <CNavLink href='Login' >Login</CNavLink>
      
    </CNavItem>
  </CSidebarNav>
  <CSidebarToggler
        // className="d-none d-lg-flex"
        // onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfolable })}
      />
</CSidebar>



     );
}
 
export default AdminSidebar;
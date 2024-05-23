import { useDispatch , useSelector } from 'react-redux';
import { 
  CCol,
  CContainer,
  CHeader,
  CNavItem,
  CNavLink,
  CRow,
  CForm,
  CFormInput,
  CAvatar,
  CHeaderNav,
  CHeaderToggler,
  CHeaderBrand,
  CHeaderDivider } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMenu  ,cilEnvelopeClosed,cilBell,cilList} from "@coreui/icons";
// import {logo} from '../../assets/brand/logo'
import { NavLink } from "react-router-dom";

import Avatar1 from '../../assets/images/avatars/1.jpg'

const AdminHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
    return ( 
        <CHeader position="fixed" className=" mb-3   bg-light ">
        <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand> */}
        <CHeaderNav className="d-none d-md-flex mx-0 p-0 ">
          <CNavItem href="Dashbord">
            {/* <CNavLink to="/dashboard" component={NavLink}> */}
              داشبورد
            {/* </CNavLink> */}
          </CNavItem>
          <CNavItem>
            <CNavLink href='UserManage'>کاربران</CNavLink>
          </CNavItem>
         
        </CHeaderNav>
        <CHeaderNav className="me-auto ">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeClosed} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* <CHeaderNav className="mx-1 ">
          <CAvatar src={Avatar1}  size="lg"/>
        </CHeaderNav> */}
        {/* <CHeaderDivider /> */}
      </CContainer>
         
    </CHeader>

     );
}
 
export default AdminHeader;
import { CContainer } from '@coreui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashbord from "../../views/dashbord"
import Home from '../../views/pages/homePge';
import UrersForm from '../../views/pages/users/uresrsForm';
import UserManage from '../../views/pages/users/userManage';
import AdForm from '../../views/pages/advertisings/adForm';
import AdManagement from '../../views/pages/advertisings/adManage';



const AdminContent = () => {
    return ( 
        <CContainer fluid>
        
    
            <Routes>
              <Route path='/Dashbord' element={<Dashbord/>}/>
              <Route index element={<Home/>}/>
              <Route path='/UrersForm' element={<UrersForm/>}/>
              <Route path='/UserManage' element={<UserManage/>}/>
              <Route path='/AdForm' element={<AdForm/>}/>
              <Route path='/AdManagement' element={<AdManagement/>}/>
            </Routes>
             
         
         
         

        </CContainer>
       
     );
}
 
export default AdminContent;
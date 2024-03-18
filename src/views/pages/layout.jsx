import AdminSidebar from "../../components/Admin/adminSidebar";
import AdminHeader from "../../components/Admin/adminHeader";
import AdminContent from "../../components/Admin/adminContent";
import AdminFooter from "../../components/Admin/footer";

const Layout = () => {
    return ( 
        <div className="d-flex">
      <AdminSidebar />
      <div className=" d-flex flex-column w-100  bg-light rounded">
        <AdminHeader />
        <div className=" shadow bg-body flex-grow-1 rounded-2 p-4 border border-warning m-4">
          <AdminContent />
        </div>
          
         {/* <AdminFooter/> */}
      </div>
     
    </div>
     );
}
 
export default Layout;
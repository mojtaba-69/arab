import { CContainer , CTable,CTableHead,CTableRow,CTableBody,CTableHeaderCell,CTableDataCell, CButton } from "@coreui/react";
import {getAll , remove,} from '../../../stateManagment/actions/advertisingActions'
import {  connect } from "react-redux";
import { Component } from "react";


class AdManagement extends Component  {
    render() {
    return (  
        <CContainer fluid>
            <CTable color="secondary" striped className="border">
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">عنوان</CTableHeaderCell>
      <CTableHeaderCell scope="col">کاربر</CTableHeaderCell>
      <CTableHeaderCell scope="col">تاریخ</CTableHeaderCell>
      <CTableHeaderCell scope="col">توضیحات</CTableHeaderCell>
      <CTableHeaderCell scope="col"></CTableHeaderCell>
      
    </CTableRow>
  </CTableHead>
  <CTableBody>
    
    {
        this.props.Advertising.map(item =>
            
          <CTableRow key={item.AdverName}>
          <CTableHeaderCell scope="row"> {item.AdverName}</CTableHeaderCell>
          <CTableDataCell>{item.role}</CTableDataCell>
          <CTableDataCell>{item.date}</CTableDataCell>
          <CTableDataCell>{item.details}</CTableDataCell>
          <CTableDataCell><CButton className="btn-danger" onClick={()=> this.props.removeAdversiting(item.AdverName)}>Delete</CButton>
          </CTableDataCell>
          
          </CTableRow> 
    
   
    )}   
       
  </CTableBody>
</CTable>
</CContainer>
)}}
 
 //state = store
 //برای خواندن اطلاعات از ریداکسmapStateToProps
    function mapStateToProps (state){
        return{
            Advertising : state.AdvertisingState.items
        }
        
    }
//    toDispatchToPropsبرای نوشتن و تغییر در ریداکس از تابع 
    const mapDispatchToProps = dispatch =>{
        return{
            removeAdversiting : (AdverName) => dispatch(remove(AdverName)),
        }
    }

 
export default connect(mapStateToProps,mapDispatchToProps)(AdManagement) ;
//connect دوتا تابع میگیرد اگر اولی نبود جاش null می گذاریم
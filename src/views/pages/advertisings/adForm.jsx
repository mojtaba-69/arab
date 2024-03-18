import {CForm,CFormInput,CCol,CFormCheck, CButton,} from "@coreui/react"
import { CDatePicker, CContainer, } from '@coreui/react-pro'
import {  connect } from "react-redux"
import { add } from "../../../stateManagment/actions/advertisingActions"

const AdForm = ({addAdvertising}) => {
    const save = (event) =>{
      
      event.preventDefult();
      const form = new FormData(event.target);
      const AdverName = form.get('AdverName');
      const role = form.get('role');
      const date = form.get('date');
      const details = form.get('details');
      
      alert('add success..');
      addAdvertising({AdverName , role , date , details});

    }
    return ( 
    <CContainer fluid>
        <CForm className="row g-4 " onSubmit={(e) => save(e)}>
        <CCol md={6}>
          <CFormInput type ="text" name="AdverName" label="عنوان آگهی"/>
        </CCol>
        <CCol md={6}> 
           <CFormInput name="role" type="text"  label="نقش:"/>
        </CCol>
        <CCol md={6} >
          <CDatePicker placeholder="تاریخ شروع" locale="fa-IR"  name="Date" type="number" />  
          {/* <CFormInput name="date" type="number"/> */}
        </CCol>
        <CCol md={12}>
          <div class="mb-3">
          <label for="Textarea1" class="form-label">توضیحات</label>
          <textarea class="form-control" id="Textarea1" rows="4" label="توضیحات" name="details"></textarea>
          </div>
        </CCol>

         <CCol md={2}>
            <CButton className="btn btn-success" type="submit">ثبت آگهی</CButton>
         </CCol>
        </CForm>
    </CContainer>
     );
}
 
const mapDispatchToProps = dispatch =>{
    return{
        addAdvertising : (item) => dispatch(add(item)),
    }
}
export default connect(null , mapDispatchToProps)(AdForm) ;
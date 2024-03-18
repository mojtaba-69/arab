import { 
  CForm, CFormInput,
  CCol,CFormSelect,
  CFormCheck,CButton,
  CInputGroupText,
  CInputGroup


} from "@coreui/react";

const UrersForm = () => {
    return ( 
      <CForm className="row g-4 dir-ltr">
        
        
        <CCol md={2}>
        <CFormSelect id="inputState" label="شخص">
          <option></option>
          <option>حقیقی</option>
          <option>حقوقی</option>
        </CFormSelect>
        </CCol>
        <CCol md={5}>
       <CFormInput placeholder="" label="نام"/>
        </CCol>
        <CCol md={5}>
        <CFormInput placeholder="" label="نام خانوادگی"/>
        </CCol>
        
        
      <CCol md={6}>
        <CFormInput type="email" id="inputEmail4"   placeholder="Email"/>
      </CCol>
      <CCol md={3}>
        <CFormInput type="text" id="inputEmail4" placeholder="Username"/>
      </CCol>
      <CCol md={3}>
        <CFormInput type="password" id="inputPassword4"  placeholder="Password" />
      </CCol>
      
      <CCol md={4}>
        <CFormInput id="inputCity" label="نام شرکت"/>
      </CCol>
      <CCol md={4}>
        <CFormSelect id="inputState" label="وضعیت">
          <option></option>
          <option>فعال</option>
          <option>غیرفعال</option>
        </CFormSelect>
      </CCol>
       <CCol md={1} className="me-5">
        <span>نقش:</span>
        </CCol>
        <CCol md={2}> 
        <div className="d-flex flex-column  border p-2 rounded-2">
       <CFormCheck type="radio" name="flexRadioDefault"  label="مدیر"/>
       <CFormCheck type="radio" name="flexRadioDefault"  label="کارفرما"/>
       <CFormCheck type="radio" name="flexRadioDefault"  label="کارجو"/>
       </div>
       </CCol>
      <CCol xs={12}>
        <CFormInput id="inputAddress" label="آدرس" placeholder="1234 Main St"/>
      </CCol>
      <CCol md={12}>
      <CInputGroup className="mb-3 ">
         <CFormInput type="file" id="inputGroupFile02"/>
         <CInputGroupText as="label" htmlFor="inputGroupFile02" className="mx-1 rounded">Upload</CInputGroupText>
       </CInputGroup>
      </CCol>
      
      <CCol xs={12}>
        <CButton type="submit">Sign in</CButton>
      </CCol>
    </CForm>
     );
}
 
export default UrersForm;
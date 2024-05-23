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
        
        
        
        <CCol md={6}>
       <CFormInput placeholder="" label="نام"/>
        </CCol>
        <CCol md={6}>
        <CFormInput placeholder="" label="نام خانوادگی"/>
        </CCol>
        <CCol md={6}>
        <CFormSelect id="inputState" label="شخص">
          <option></option>
          <option>حقیقی</option>
          <option>حقوقی</option>
        </CFormSelect>
        </CCol>
        <CCol md={6}>
        <CFormSelect id="inputState" label="نقش">
          <option></option>
          <option>مدیر</option>
          <option>کارفرما</option>
          <option>کارجو</option>
        </CFormSelect>
      </CCol>
        
      {/* <CCol md={6}>
        <CFormInput type="email" id="inputEmail4"   placeholder="Email"/>
      </CCol>
      <CCol md={3}>
        <CFormInput type="text" id="inputEmail4" placeholder="Username"/>
      </CCol>
      <CCol md={3}>
        <CFormInput type="password" id="inputPassword4"  placeholder="Password" />
      </CCol> */}
      
      <CCol md={6}>
        <CFormInput id="inputCity" label="نام شرکت"/>
      </CCol>
      <CCol md={6}>
        <CFormSelect id="inputState" label="وضعیت">
          <option></option>
          <option>فعال</option>
          <option>غیرفعال</option>
        </CFormSelect>
      </CCol>
       
      <CCol xs={6}>
        <CFormInput id="inputAddress" label="آدرس" />
      </CCol>
      {/* <CCol md={6}>
      <CInputGroup className="mb-3 ">
         <CFormInput type="file" id="inputGroupFile02"/>
         <CInputGroupText as="label" htmlFor="inputGroupFile02" className="mx-1 rounded">Upload</CInputGroupText>
       </CInputGroup>
      </CCol> */}
      
      <CCol xs={12}>
        <CButton  className='size-lg' type="submit">ثبت</CButton>
      </CCol>
    </CForm>
     );
}
 
export default UrersForm;
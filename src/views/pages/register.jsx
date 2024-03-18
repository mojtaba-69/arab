import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  return (
    <div className="register min-vh-100 d-flex flex-row align-items-center  " >
      <CContainer>
        <CRow className="justify-content-center" >
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 text-center">
              <CCardBody className="p-4">
                <CForm >
                  <h1>عضویت</h1>
                  
                  <CInputGroup className="mb-3 gap-1 ">
                    <CInputGroupText >
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput className='rounded-2' placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3 gap-1">
                    <CInputGroupText className='rounded-2'>@</CInputGroupText>
                    <CFormInput className='rounded-2' placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3 gap-1">
                    <CInputGroupText className='rounded-2'>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      className='rounded-2'
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4 gap-1">
                    <CInputGroupText className='rounded-2'>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      className='rounded-2'
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton className='btn text-'>ثبت نام</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register

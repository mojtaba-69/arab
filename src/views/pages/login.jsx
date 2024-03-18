import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cibTwitter ,cibGoogle ,cibFacebook
} from '@coreui/icons'


const Login = () => {
  return (
    <div className="login min-vh-100 d-flex  align-items-center  " >
      <CContainer fluid>
        <CRow className="row mx-auto ">
          <CCol md={8}>
            <CCardGroup>
              <CCard className=" card p-4 rounded-2 text-center ">
                <CCardHeader className='fs-6 '><h1>ورود</h1></CCardHeader>
                <CCardBody>
                  <CForm className='text-center'>
                    <CInputGroup className="mb-3 gap-1" >
                      <CInputGroupText className='rounded-2' >
                        <CIcon icon={cilUser}  />
                      </CInputGroupText>
                      <CFormInput className='rounded-2' placeholder="نام کاربری یا ایمیل" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4 gap-1">
                      <CInputGroupText className='rounded-2'>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        className='rounded-2'
                        type="password"
                        placeholder="رمزعبور"
                        
                      />
                      
                    </CInputGroup>
                    
                    <CRow className='align-items-center'>
                      <CCol xs={12}>
                      <CButton color='link' className="px-0 text-decoration-none ">
                         فراموشی کلمه عبور؟
                        </CButton>
                      </CCol>
                      <CCol xs={12}>
                     
                        <CButton href='Layout' className="btn1 rounded-pill border-0 w-100">
                          ورود
                        </CButton>
                        
                      </CCol>
                      <CCol xs={12}>
                      <CButton color='link' href='Register' className="text-white text-decoration-none fs-5 ">
                         ثبت نام
                        </CButton>
                      </CCol>
                      </CRow>
                  </CForm>
                </CCardBody>
                <CCardFooter className='justify-items-between'>
                <CIcon icon={cibGoogle}  />
                <CIcon icon={cibTwitter}  />
                <CIcon icon={cibFacebook
}  />
                
                </CCardFooter>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

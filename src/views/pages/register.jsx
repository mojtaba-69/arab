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
import { cilLockLocked, cilUser,cilAt,cibAuth0 } from '@coreui/icons'
import axios from 'axios'
import { useState } from 'react'


const Register = () => {
  const [username , setUsername]=useState("")
  const [password , setPassword]=useState("")
  const [name , setName]=useState("")
 
 const register = ()=> {
  axios
  .post("https://farawin.iran.liara.run/api/user" ,{
    username : username,
    password : password,
    name : name
  })
  .then((res)=>{
    console.log(res.data.user)
  })
  .catch((error)=> console.log(error))
}

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light" >
      <CContainer>
        <CRow className="justify-content-center" >
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 text-center text-medium-emphasis">
              <CCardBody className="p-4">
                <CForm onSubmit={register} >
                  <h1>BrandName</h1>
                  <CIcon icon={cibAuth0} size='lg'/>
                  <CInputGroup className="mb-3 gap-1">
                    <CInputGroupText className='rounded-2 inputtext'>
                      <CIcon icon={cilUser}  />
                    </CInputGroupText>
                    <CFormInput className='rounded-2'
                    placeholder="شماره موبایل"
                    autoComplete="username" 
                    onChange={(event)=> setUsername(event.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3 gap-1">
                    <CInputGroupText className='rounded-2 '>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      className='rounded-2'
                      type="password"
                      placeholder="رمز عبور"
                      autoComplete="new-password"
                      onChange={(event)=> setPassword(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3 gap-1">
                    <CInputGroupText className='rounded-2 inputtext'>
                      <CIcon icon={cilAt}/>
                    </CInputGroupText>
                    <CFormInput className='rounded-2'
                     placeholder="نام و نام خانوادگی" 
                     onChange={(event)=>setName(event.target.value)} />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton className='btn text-' onClick={register}>ثبت نام</CButton>
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

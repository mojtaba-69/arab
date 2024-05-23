import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibAuth0} from '@coreui/icons'
import {ReactComponent as Icongoogle} from "../../assets/icones/Icongoogle.svg"
import {ReactComponent as Icongitlab} from "../../assets/icones/Icongitlab.svg"
import {ReactComponent as Icontwitter} from "../../assets/icones/Icontwitter.svg"
import {ReactComponent as Iconlinkedin} from "../../assets/icones/Iconlinkedin.svg"
// import { login } from '../../stateManagment/store
import { useState } from 'react'
import axios from 'axios'


const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword]= useState("")
  
  const login =(event)=>{
   event.preventDefault();

    axios
    .post('https://farawin.iran.liara.run/api/user/login' ,
     {
      username : username,
      password : password
     }
    )
    .then((response)=>{
      console.log(response.data.code)
      if (response.data.code === "200"){
        const token = response.data.token
        window.localStorage.setItem("token", token)
      }
  })
    .catch((error)=>console.log(error))
  }
  
  return (
    <div className=" min-vh-100 d-flex flex-column bg-light  align-items-center " style={{padding:'2rem' }} >
     <div className='d-flex'>
      <h1>BrandName</h1>
      <CIcon icon={cibAuth0} size='lg'/>
     </div>
      <div>
      <CContainer fluid>
      <CCard  className=" rounded-2 text-center " style={{margin:'15px'}}>
        <CCardBody>
          <h5 >خوش آمدید!</h5>
        <CRow xs={{ cols: 2 }} className='my-4' >
            <CCol  className='mb-3'>
               <Icongoogle/>
               <Link href="" className='text-decoration-none text-black mx-1' >ورود با گوگل</Link>
              </CCol>
            <CCol >
            <Icongitlab/>
               <Link href="" className='text-decoration-none text-black mx-1'>ورود با گیت</Link>
            </CCol>
            <CCol >
            <Icontwitter/>
               <Link href="" className='text-decoration-none text-black mx-1'>ورود با توییتر</Link>
            </CCol>
            <CCol  className='mb-3'>
            <Iconlinkedin/>
               <Link href="" className='text-decoration-none text-black mx-1'>ورود با لینکدین</Link>
            </CCol>
          </CRow>
          <hr/>
         <div className='w-75 justify-center mx-auto'>
         <CForm onSubmit={login}>
            <label  className='text-muted d-flex row-reverse me-1'>نام کاربری</label>
            <CFormInput className='rounded-2 mb-3' onChange={(event)=>setUsername(event.target.value)} />
            <div className='d-flex gap-5 '>
            <label  className='text-muted  me-1 ps-4' >کلمه عبور</label>
            <Link className='text-decoration-none pe-5 me-5'>فراموشی کلمه عبور؟</Link>
            </div>  
            <CFormInput className='rounded-2' onChange={(event)=>setPassword(event.target.value)} />
          
          <CRow className='align-items-center mt-4'>  
            <CCol xs={12}>
              <Link to={"/Dashbord"}>
              <CButton className="btn1 rounded-pill border-0 w-100 mb-3 " onClick={login} >
                ورود
              </CButton> 
              </Link>
            </CCol>
            <CCol xs={12}>
            <CButton color='link' href='Register' className="text-success text-decoration-none fs-5  fw-bold mb-2 ">
               ثبت نام
              </CButton>
            </CCol>
            </CRow>
        </CForm>
         </div>  
        </CCardBody>  
      </CCard>
</CContainer>
      </div>    
    </div>
  )}
export default Login

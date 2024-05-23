import { CContainer , CTable,CTableRow,CTableBody,CTableHeaderCell,CTableDataCell, CButton } from "@coreui/react";
// import {getAll , remove,} from '../../../stateManagment/actions/advertisingActions'
// import {  connect, useSelector } from "react-redux";
import { Component } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const AdManagement =()=>{
const[userList ,setUserList] = useState([])
const[contactList , setContactList ] = useState([])

useEffect(()=>{
 getUsers()
 getContacts()
},[])

const getUsers =()=>{
axios.get('https://farawin.iran.liara.run/api/user')
.then((res)=> {
  if (res.data.code === "200"){
    setUserList(res.data.userList)
    console.log(res.data.code)
  }
})
.catch((error)=> console.log(error))
} 


const getContacts=()=>{
  const url = "https://farawin.iran.liara.run/api/contact"
  const header = {
    accept : "application/json",
    authorization : window.localStorage.token,
  }
  axios
  .get(url , {
    headers : header,
  })
  .then ((res)=>{
    console.log(res.data.code)
    const status = res.data.code
    if (status === "200"){
      setContactList(res.data.contactList)
      console.log(res.data)

    }
  })
  .catch((error)=> console.log(error))
}

  const columns = [
    {
      key: 'id',
      label: 'شماره ',
    },
    {
      key: 'heading_1',
      label: "موبایل",
    },
    {
      key: 'heading_2',
      label: "نام و نام خانوادگی",
    }
    
  ]
  const columns1 = [
    {
      key: 'id',
      label: 'شماره ',
    },
    {
      key: 'heading_1',
      label: "موبایل",
    },
    {
      key: 'heading_2',
      label: "نام و نام خانوادگی",
    }
    
  ]
 
return (
  <CContainer fluid>
  <div className="d-flex flex-columns gap-5">
   
  <div className="border">
<CTable striped columns={columns} className="text-center">
  
  <CTableBody> 
    {userList.map((user , index)=>(

    <CTableRow key={index} className="text-center">
      
      <CTableDataCell>{index + 1}</CTableDataCell>
      <CTableDataCell>{user.username}</CTableDataCell>
      <CTableDataCell>{user.name}</CTableDataCell>
      
    </CTableRow>
    ))}
    
  </CTableBody>
</CTable>
</div>
<div className="d-flex flex-grow-1"></div>
<div className="border ">

<CTable striped columns={columns1} className="text-center">
  
  <CTableBody> 
    {contactList.map((item , index)=>(

    <CTableRow key={index} className="text-center">
      
      <CTableDataCell>{index + 1}</CTableDataCell>
      <CTableDataCell>{item.username}</CTableDataCell>
      <CTableDataCell>{item.name}</CTableDataCell>
      
    </CTableRow>
    ))}
    
  </CTableBody>
</CTable>
</div>

</div>
</CContainer>
)}
export default AdManagement;























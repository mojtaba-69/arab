import { CContainer } from "@coreui/react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import "./styles/index.scss"
import Layout from "./views/pages/layout";
import Login from "../src/views/pages/login"
import Register from "./views/pages/register";



 

function App() {
  return (

  //  <Layout/>
      <Routes>
         <Route path="/Layout"  element={<Layout/>}/>
         <Route index element={<Login/>}/>
         <Route exact path="/Register"  element={<Register />} />
       </Routes>
    
      
  );
}

export default App;

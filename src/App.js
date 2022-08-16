import './App.css';
import {Nav, Container, Navbar , Button} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import { useEffect, useState ,useRef } from 'react';


function App() {

  let navigate = useNavigate();


  
  return (
    <div className="App">
      <Navbar  bg="light" className="navbar-fnt fixed-top d-inline">
        <div className="top-part">
          <Navbar.Brand href="#home"><h3>GOLF U</h3></Navbar.Brand>
        </div>
       <Container>
         <Nav className="d-flex">
            <Nav.Link  onClick={()=>{navigate('/ ')}}>홈</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/screen')}}>스크린</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/field')}}>필드</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/reservation')}}>예약</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/media')}}>미디어</Nav.Link>
            <Button variant="success" className="btn-op" onClick={()=>{navigate('/login/screen')}}>스크린 로그인</Button>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg">
        {
          image.map((a,i)=>{
            return(
              <div className={"main-img"+[i+1]+""}>
                <img src={"img/gollf"+[i+1]+"(1920x500).jpg"} alt=""/>
              </div>
            )
          })
        }
      </div>
   </div>
    );
}



export default App;

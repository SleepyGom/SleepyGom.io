import './App.css';
import {Nav, Container, Navbar , Button} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import { useEffect, useState ,useRef } from 'react';
import slideList from './slide/slidedata';
import Slide from './slide/slide.js';
import Userdata from './user/userdata.js';


function App() {

  let navigate = useNavigate();
  const slideRef = useRef();
  const userRef = useRef();
  let [slide,setSlide] = useState(slideList);
  let [count,setCount] = useState(1);
  let [user, setUser] = useState(Userdata);

  let roof = setInterval(()=>{
    if(count < slide.length){
      setCount(count+1);
    }else{
      setCount(1);
    };    
    clearInterval(roof);

  },5000)
  console.log(count)
  
  if(slideRef.current && true){
    if(count === 3){
      slideRef.current.style.transform = 'translateX(0)'
    }else{
      slideRef.current.style.transform = `translateX(-${
        window.innerWidth * count
      }px)`
    }  
  }  


  
  return (
    <div className="App">
      <Navbar  bg="light" className="navbar-fnt d-inline">
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
      <Score user={user} userRef={userRef}/>
      <Slide slide={slide} slideRef={slideRef} count={count}/>
   </div>
    );
}

function Score(props){
  return(
    <div className="user-info">
      {props.user.map((a,i)=>{
        return(
          <div className = 'userscore' ref={props.userRef}>
          </div>
        )
      })}
    </div>
  )
}


export default App;

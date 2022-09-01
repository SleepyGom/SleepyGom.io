import './App.css';
import {Nav, Container, Navbar , Button} from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import { useEffect, useState ,useRef } from 'react';
import slideList from './slide/slidedata';
import Slide from './slide/slide.js';
import Userdata from './user/userdata.js';
import {Friend,Ghandie,Lastgame} from './userinfo/userinfo.js';
import axios from 'axios';
import Weather from './user/weather.js';
import Login from './login/login.js';


function App() {

  let navigate = useNavigate();
  const slideRef = useRef();
  const userRef = useRef();
  let [slide,setSlide] = useState(slideList);
  let [count,setCount] = useState(1);
  let [user, setUser] = useState(Userdata);
  const scrollRef = useRef(null);


  //자동 슬라이드 캐러셀
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

  //드래그 이벤트

  let [isdrag , setIsdrag] = useState(false);
  let [startX,setStartX] = useState();

  let dragstart = (e)=>{
    e.preventDefault();
    setIsdrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  }

  let onDragend = ()=>{
    setIsdrag(false);
  }

  let onDragmove = (e)=>{
    if(isdrag){
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  }

  
  return (
    <div className="App">
      <Navbar  bg="light" className="navbar-fnt d-inline">
        <div className="top-part">
          <Navbar.Brand href="#home"><h3>GOLF U</h3></Navbar.Brand>
          <Link to="/login">Sign up</Link>   
        </div>
       <Container>
         <Nav className="d-flex t-nav">
            <Nav.Link  onClick={()=>{navigate('/ ')}}>홈</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/screen')}}>스크린</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/field')}}>필드</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/reservation')}}>예약</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/media')}}>미디어</Nav.Link>
            <Button variant="success" className="btn-op" onClick={()=>{navigate('/login/screen')}}>스크린 로그인</Button>
          </Nav>
        </Container>
      </Navbar>
      <Slide slide={slide} slideRef={slideRef} count={count}/>
      <Container className ='user-info'
       ref={scrollRef}
       onMouseDown={dragstart}
       onMouseMove={onDragmove}
       onMouseUp={onDragend}
       onMouseLeave={onDragend}>
        <Nav className="n_wrap">
          <Nav.Link  onClick={()=>{navigate('/ ')}}><Weather/></Nav.Link>
          <Nav.Link  onClick={()=>{navigate('/ ')}}><Lastgame/></Nav.Link>
          <Nav.Link  onClick={()=>{navigate('/ ')}}><Ghandie/></Nav.Link>
          <Nav.Link  onClick={()=>{navigate('/ ')}}><Friend/></Nav.Link>
        </Nav>
      </Container>
      <Routes>
        <Route path ='/login' element={<Login />}/>
      </Routes>
   </div>
    );
}




export default App;

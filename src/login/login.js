import React from 'react';
import '../App.css'
import {Nav, Container, Navbar , Button} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';


function Login(){
    let navigate = useNavigate();

    return(
        <div className='login'>
            <div className="login_p">
            <h1>GOLF U</h1>
                <div className ="login_input">
                    <h5><input type = 'email' placeholder='이메일을 입력해주세요'></input></h5>
                    <h5><input type = 'password' placeholder='비밀번호를 입력해주세요'></input></h5>
                        <div className="remember_id">
                            <p>아이디 기억하기</p><input type='checkbox'></input>
                        </div>
                        <Button variant="success" className="login-button">GOLF U 로그인</Button>
                        <Container className="login_nav">
                            <Nav.Link  onClick={()=>{navigate('/signup ')}}>회원가입</Nav.Link>
                            <Nav.Link  onClick={()=>{navigate('/screen')}}>아이디 찾기</Nav.Link>
                            <Nav.Link  onClick={()=>{navigate('/field')}}>비밀번호 찾기</Nav.Link>
                        </Container>
                </div>
            </div>
        </div>
    )
}

export default Login;
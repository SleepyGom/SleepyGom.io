import '../App.css'
import {React , useState} from 'react';
import {Nav, Container, Navbar , Button} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';


function Signin (){
    return(
        <div className="sign_in">
            <div className="sign_info">
                <h1>GOLF U</h1>
                <p>아이디<span style={{color:'red'}}>*</span></p>
                <input type ='email'></input>
                <p>비밀번호<span style={{color:'red'}}>*</span></p>
                <input type ='password'></input>
                <p>비밀번호 재확인<span style={{color:'red'}}>*</span></p>
                <input type ='password'></input>
                <p>이름<span style={{color:'red'}}>*</span></p>
                <input type ='text'></input>
                <p>생년월일<span style={{color:'red'}}>*</span></p>
                <input type='number' style={{width:"150px" , marginRight:'23px' , height:'30px' , padding:'0px'}} placeholder="2022"></input>
                <input type='number' style={{width:"100px" , marginRight:'23px' , height:'30px'}} placeholder='01'></input>
                <input type='number' style={{width:"100px" , height:'30px'}} placeholder="01"></input>
                <p>본인 확인 이메일<span style={{fontSize:'14px' , color:'#999999'}}>(선택)</span></p>
                <input type="email" placeholder="이메일을 입력하세요"></input>
                <br/>
                <p>휴대전화<span style={{color:'red'}}>*</span></p>
                <input placeholder='번호를 입력하세요'></input>
                <Button variant="success" style={{margin:'20px 0 30px 0', width:'400px', height:'40px'}}> 가입하기</Button>
            </div>
        </div>
    )
}


export {Signin}
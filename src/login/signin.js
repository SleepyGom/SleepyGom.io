import '../App.css'
import {React , useState , useRef , useEffect} from 'react';
import {Nav, Container, Navbar , Button} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';


function Signin (){

    const [inputValue, setInputValue] = useState({
        username :'',
        email :'',
        password :'',
        passwordConfirm:'',
        phoneNumber : ''
    });

    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const phoneNumberRef = useRef();

    const { username, email, password, phoneNumber} = inputValue;

    console.log(inputValue)
    
    const nameHandler = e =>{
       setInputValue((prevState)=>{
        return{ ...prevState, username : e.target.value,
                            }
       }) 
    };

    const passwordHandler = e=>{
        setInputValue((prevState)=>{
            return{...prevState, password : e.target.value,}
        });        
    };
    
    const passwordConfirmHandler = e=>{
        setInputValue((prevState)=>{
            return{...prevState, passwordConfirm : e.target.value,}
        });        
    };

    const phoneHandler = e=>{
        setInputValue((prevState)=>{
            return{...prevState, phoneNumber : e.target.value,}
        });
    };
    useEffect(()=>{
        if(inputValue.passwordConfirm == inputValue.password){
            passwordConfirmRef.current.style.visibility = 'hidden'
            passwordConfirmRef.current.style.opacity = '0'
        }else if(inputValue.passwordConfirm.length > 1){
            passwordConfirmRef.current.style.visibility = 'visible'
            passwordConfirmRef.current.style.opacity = '1'

        };

        if(inputValue.phoneNumber.length == 11){
            phoneNumberRef.current.style.visibility = 'hidden'
            phoneNumberRef.current.style.opacity = '0'
        }else if(inputValue.phoneNumber.length >= 1){
            phoneNumberRef.current.style.visibility = 'visible'
            phoneNumberRef.current.style.opacity = '1'
        };

        if(/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(inputValue.password) || inputValue.password.length < 1){
            passwordRef.current.style.visibility = 'hidden'
            passwordRef.current.style.opacity = '0'
        }else{
            passwordRef.current.style.visibility = 'visible'
            passwordRef.current.style.opacity = '1'
        };

        if(inputValue.username.length == 1 || inputValue.username.length > 5){
            nameRef.current.style.visibility = 'visible'
            nameRef.current.style.opacity = '1'
           }else{
            nameRef.current.style.visibility = 'hidden'
            nameRef.current.style.opacity = '0'
           };
    })



    
    // 비밀번호 특수문자 검사를 위한 정규식표현.
    const specialLetter = inputValue.password.search(/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/)
    // 특수문자 1자 이상, 전체 8자 이상일것.
    const isValidPassword = inputValue.password.length >= 8 && specialLetter >= 1;

    const isValidInput = inputValue.username.length >= 1 && phoneNumber.length == 11 && email.length >= 1;

    const getIsActive = isValidPassword && isValidInput === true;

    return(
    <div className = 'sign-in'>
        <form className='formbox'>
            <div className = "sign-logo">
                <h2 style={{margin:'0'}}>GOLF U</h2>
                <p style={{margin:'0 0 2px 5px'}}>회원가입</p>
            </div>
            <div className='name boxAlign'>
                <p>이름</p><span>*</span>
                <input name="username" 
                       placeholder='이름(2~5자 이내)을 입력해주세요'
                       onChange={nameHandler}
                       autoComplete='off'></input>
                <p className='nameWarn' ref={nameRef}>이름을 2~5자 이내로 입력해주세요</p>
            </div>
            <div className='email boxAlign'>
                <p>이메일</p><p style={{fontSize:'10px'}}>&#40;선택&#41;</p><br/>
                <input type = 'email'placeholder='이메일 주소를 입력해주세요' style={{width:'200px',marginRight:'5px'}}></input>
                @
                    <select id="domain-list" required style={{width:'120px' ,height:'40px',borderRadius:'5px',marginLeft:'5px'}}>
                        <option disabled value="" selected>선택</option>
                        <option value="naver.com">naver.com</option>
                        <option value="hanmail.net">hanmail.net</option>
                        <option value="google.com">google.com</option>
                        <option value="nate.com">nate.com</option>
                        <option value="custom">직접 입력</option>
                    </select>
            </div>
            <div className='password boxAlign'>
                <p>비밀번호</p><span>*</span>
                <input type = 'password' 
                        placeholder='비밀번호 입력(문자,숫자,특수문자 포함 8~20자)'
                        onChange={passwordHandler}></input>
                <p className ='passwordWarn' 
                        ref = {passwordRef}>문자,숫자,특수문자 포함 8~20자이내로 비밀번호를 입력해주세요</p>
            </div>


            <div className='passwordConfirm boxAlign'>
                <p>비밀번호 재확인</p><span>*</span>
                <input type = 'password' 
                        placeholder='비밀번호 재입력'
                        onChange={passwordConfirmHandler}></input>
                <p className='passwordConfirmWarn' ref={passwordConfirmRef}>비밀번호를 재확인 해주세요</p>
            </div>


            <div className='phone boxAlign'>
                <p>휴대전화</p><span>*</span>
                <input type ='text' 
                        placeholder='휴대폰 번호 입력( - 제외 11자리 입력)'
                        onChange={phoneHandler}
                        ></input>
                <p className='phoneNumberWarn' ref={phoneNumberRef}>전화번호를 입력해주세요</p>
            </div>


            <Button variant='success'
                     type="submit" 
                     style={{float:'right',margin:'20px 25px 0 0',backgroundColor:'#4bbe70',border:'0px', width : '250px !important'}}
                     className={
                        getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'
                      }>가입하기</Button>

        </form>
    </div>
    )
}


export {Signin}
function Firstpage (){
    return(
        <div className="first-page">
        <h1>GOLF U</h1>
        <Routes>
          <Route path="" element = {<First/>}/>
        </Routes>
      </div>
  
    );
}

export default Firstpage
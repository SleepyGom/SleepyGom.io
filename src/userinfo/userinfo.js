function Ghandie (){
    return(
      <div className = "ghand box f_color">
       <h5>G핸디</h5>
       <h1>38.1</h1>
     </div>
     )
   }
   
   function Friend () {
     return(
       <div className="friend box f_color">
         <h5>추천친구</h5>
         <p>혹시 이 친구 알아요?</p>
         <div classname="random"></div>
       </div>
     )
   }
   
   function Weather(){
     return(
       <div className="t_weather box f_color">
         <p>오늘의 날씨는</p>
         <h3></h3>
         <h5>~ 하기 좋은 날이네요</h5>
       </div>
     )
   }
   
   
   function Lastgame(){
     return (
       <div className="last-game box f_color">
         <h5>103 (+31)</h5>
         <h2>위치</h2>
         <p>날짜</p>
       </div>
     )
   }

   
   export {Lastgame ,Weather , Friend , Ghandie}
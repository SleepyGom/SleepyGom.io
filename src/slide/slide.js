function Slide(props){

    return(
      <>
        <div className="slideBg">
          <ul ref={props.slideRef} className="wrapSlide">
            {props.slide.map((slide)=>{
              return(
              <li key={slide.id}>
                <img src={slide.src} alt={slide.alt}/>
              </li>
              )
            })}
          </ul>
        </div>
      </>
    );
  }
 
  export default Slide
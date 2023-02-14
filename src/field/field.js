function Ratingfield(props){

    return(
        <div>
            <ul className="ranking">
                {props.field.map((field)=>{
                    return(
                        <li className="box" key={field.id} style={{
                            backgroundImage : `url(${field.src})`,
                            backgroundSize : 'cover',
                            backgroundPosition : 'center',
                            backgroundRepeat :'no-repeat'
                            
                        }}><div ref={props.fieldRef} className="back_side"></div><h2>Top {field.id}</h2><h3>{field.alt}</h3></li>
                    )
                })}
                            <div className = 'more' style={{width: '250px' , height : '300px', margin : '20px'}}>
                                <h3>더 많은 필드 보기</h3>
                            </div>
            </ul>
        </div>
    )
};

export default Ratingfield
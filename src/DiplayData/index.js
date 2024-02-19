

const DiplayData = (props) =>{
     
    return(
        <> 
        <li>
            <div>
                <img src={props.ImageUrl} alt={props.Name} />
                <h1>{props.Name}</h1>
                <p>{props.ShortDesc}</p>
                <button>View</button>
            </div>
        </li>
        </>
    )
    }

export default DiplayData
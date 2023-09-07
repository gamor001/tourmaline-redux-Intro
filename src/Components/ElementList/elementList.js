import {useSelector} from "react-redux";

function ElementList(){
    const elementList = useSelector(store=>store.elementList)

    return(
        <div>
            <ul>
                {elementList.map((element, i) => (
                <li key={i}>{element}</li>
                ))}
            </ul>
        </div>
    )
}

export default ElementList

import {useDispatch} from 'react-redux';
import { useState } from 'react';

function ElementForm(){
    const dispatch = useDispatch();
    const [newElement, setNewElement] = useState('');
    const handleSubmit=(event) => {
        event.preventDefault();
        //tell redux that we want to add new Element
        dispatch({
          type:'ADD_ELEMENT',
          payload: newElement
        })
        setNewElement('');
      }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Element Name" value={newElement} onChange= {event=> setNewElement(event.target.value)} required/>
            <button type="submit">Add</button>
        </form>
    )
}

export default ElementForm;
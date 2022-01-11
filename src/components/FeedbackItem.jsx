import Card from "../Shared/Card";
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from "../Context/FeedbackContext";
import {useContext} from "react";

function FeedbackItem({item}){
    const {deleteFeedback} = useContext(FeedbackContext)
    const {editFeedback} = useContext(FeedbackContext)

    return (
        <>
            <Card>
                <div className="num-display">{item.rating}</div>
                <button onClick={() => deleteFeedback(item.id)} className='close'>
                    <FaTimes color='purple'/>
                </button>
                <button onClick = {() => editFeedback(item)} className='edit'>
                    <FaEdit color = 'purple'/>
                </button>
                <div className="text-display"> {item.text}</div>
            </Card>
        </>
    )
}

export default FeedbackItem

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../Context/FeedbackContext";
import {useContext} from "react";
function FeedbackList(){
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return(
            <p> No Feedback yet</p>
        )
    }

    return(
        <div className="Feedback-List">
            {feedback.map((item) => (
                <FeedbackItem key = {item.id}  item = {item}/>
            ))}
        </div>
    )
}
export default FeedbackList

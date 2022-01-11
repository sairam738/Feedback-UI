import FeedbackContext from "../Context/FeedbackContext";
import {useContext} from "react";

function FeedbackStats(){
    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    },0)/feedback.length

    return(
        <div className= 'feedback-stats'>
            <h4>{feedback.length} reviews</h4>
            <h4>average rating: {average}</h4>
        </div>
    )
}
export default FeedbackStats

import Card from "../Shared/Card";
import {useContext, useEffect, useState} from "react";
import RatingSelect from "./Rating-Select";
import Button from "../Shared/Button";
import FeedbackContext from "../Context/FeedbackContext";
function FeedbackForm(){
    const[text, setText] = useState('')
    const[rating, setRating] = useState(10)
    const[btnDisabled, setBtnDisabled] = useState(true);
    const[message, setMessage] = useState('')
    const[version, setVersion] = useState('primary')

    const {handleSubmit, editableFeedback, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(editableFeedback.edit === true) {
            setText(editableFeedback.item.text)
            setRating(editableFeedback.item.rating)
            setBtnDisabled(false)
        }
    }, [editableFeedback])

    const sendFeedback = (e) => {
        e.preventDefault()
        if(text.length >= 10){
            const newFeedback = {
                text,
                rating,
            }

            if(editableFeedback.edit === true){
                updateFeedback(editableFeedback.item.id, newFeedback)
            } else{
                handleSubmit(newFeedback)
            }
            setText('')
        }
    }
    const HandleTextChange = (e) =>{
        setText(e.target.value)
        if(text === ""){
            setBtnDisabled(true)
            setMessage(null)
            setVersion('primary')
        } else if(text !== "" && text.trim().length < 10){
            setBtnDisabled(true)
            setMessage("Review must be atleast 10 characters")
            setVersion('primary')
        } else{
            setBtnDisabled(false)
            setMessage(null)
            setVersion('secondary')
        }


    }

    return (
        <Card>
            <form onSubmit={sendFeedback}>
                <h2>How will you rate my coding on a scale of 10? (I am also open for reviews)</h2>
                <RatingSelect select = {(rating) => setRating(rating)}/>
                <br/>
                <div className='input-group'>
                <input type='text' onChange={HandleTextChange} placeholder='Write a review'
                       value={text}/>
                <Button type = 'submit' isDisabled={btnDisabled} version={version}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm

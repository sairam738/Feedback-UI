import {createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is the feedback 1 from context',
            rating: 9
        },
        {
            id: 2,
            text: 'This is the feedback 2 from context',
            rating: 6
        },
        {
            id: 3,
            text: 'This is the feedback 3 from context',
            rating: 8
        }
    ])

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure, you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const handleSubmit = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback ([newFeedback, ...feedback])
    }

    const [editableFeedback, setEditableFeedback] = useState({
        item:{},
        edit: false,
    })

    const editFeedback = (item) => {
        setEditableFeedback({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updatedItem}: item))
        )
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            editableFeedback,
            deleteFeedback,
            handleSubmit,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>)
}

export default FeedbackContext

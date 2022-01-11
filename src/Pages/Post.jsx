import {useParams} from "react-router-dom";

function Post(){

    const laulas = useParams()
    return (
        <>
            <h1>This is the post Page {laulas.id}</h1>
            <h1>{laulas.name}</h1>

        </>
    )
}
export default Post

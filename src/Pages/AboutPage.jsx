import {Link} from 'react-router-dom'
import Card from "../Shared/Card";
function AboutPage(){
    return (
        <Card>
            <h1>About the Website</h1>
            <p>This is the website to take feedback on how good my rating skills are.</p>
            <p>Version 1.0.0</p>
            <Link to = '/'>back to Home</Link>
        </Card>
    )
}
export default AboutPage

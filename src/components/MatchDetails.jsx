import {useParams} from "react-router-dom";

export default function MatchDetails() {
    const {id} = useParams();
    return (
        <div>
            <h1>Match details for :</h1>
            <div> eventId {id}</div>
        </div>
    )
}

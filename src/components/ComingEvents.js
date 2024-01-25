import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import '../ComingEvents.css';

export function ComingEvents() {
    const [data, setData] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );
    const API = "https://apiv3.apifootball.com/?action=get_events&from=2023-10-28&to=2023-10-28&league_id=149&APIkey=a00e7470cca6e6ca7955755a0ed936be6265869734a5ac65e512abc83cdf5b56";
    const navigate = useNavigate();

    useEffect( () => {
        fetch( API )
            .then( res => res.json() )
            .then( (data) => {
                setData( data );
                setIsLoading( false )
            } );
    }, [] )

    if (isLoading) return <p>Loading....</p>
    return (
        <div className="events">
            <div className="coming-events-header">
                <div className="league-logo"><img src={data[0].country_logo} alt=""/></div>
                <div className="country-name">{data[0].country_name}": "{data[0].league_name}</div>
            </div>
            <div className="coming-events"> {
                data.map( item =>
                    <div key={item.match_id} className="coming-event"
                         onClick={() => navigate( `matchDetails/${item.match_id}` )}>
                        <div className="match-date">{item.match_date}</div>
                        <div className="team_home_badge"><img src={item.team_home_badge} alt=""/></div>
                        <div className="team_home_name">{item.match_hometeam_name}</div>
                        <div className="team_home-score">{item.match_hometeam_ft_score}</div>
                        <div className="match-time">{item.match_time}</div>
                        <div className="team_away_badge"><img src={item.team_away_badge} alt=""/></div>
                        <div className="team_away_name">{item.match_awayteam_name}</div>
                        <div className="team_away_score">{item.match_awayteam_ft_score}</div>
                    </div> )}
            </div>
        </div>
    )
}


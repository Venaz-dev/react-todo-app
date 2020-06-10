import React from "react"
import HubData from "./Hubdata"
import {Link} from "react-router-dom"

class DisplayHub extends React.Component{
    state = {
        Hubs: HubData
    }
    render(){
        const {detailsClick, city} = this.props
        const {Hubs} = this.state

        const showingCity = city === "" ? 
                            Hubs : 
                            Hubs.filter(c => (
                                c.city.toLowerCase().includes(city.toLowerCase())
                            ))
        const ShowHub = showingCity.map(hub =>
            <Link  
                className="more-details" 
                to='/details'
                onClick={() => detailsClick(hub.id)}>
            <div className="hub-list-item" >
                <div className="hub-image-section">
                    <div 
                        className="hub-image" 
                        style={{
                                backgroundImage : `url(${hub.imageURL})`}}
                    >
                    </div>
                </div> 
                <div className="hub-details" >
                    <h4 className="hub-title">{hub.name}</h4>
                    <p className="address"> {hub.city}</p>
                </div>
                
            
            </div>
            </Link>
            )

        return(
            <body>
                <div style={{background: 'white', padding:'30px'}}>
                    <h1 className="hub-title">Featured Hubs in {city=== "" ? "your city" : city }</h1>
                </div>
                <div className="scroll" style={{display:'flex'}}>    
                    {ShowHub}
                </div>
                <div style={{background: 'white', padding:'30px'}}>
                <h1 className="hub-title">Featured Hubs in your City</h1>
            </div>
            </body>
        )
    
    }
}

export default DisplayHub
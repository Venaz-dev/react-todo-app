import React from "react"
import { Link } from "react-router-dom"

class HubDetails extends React.Component{
    render(){
        const {details} = this.props
        return(
            <div
                style={{
                    width: '70%', background: 'white'
                }} 
            >
                <Link to ="/" className="close-create-contact">Back</Link>
                <div 
                    className="hub-image" 
                    style={{
                            backgroundImage : `url(${details.imageURL})`}}
                ></div> 
                <div className="contact-details" >
                    <h2 className="hub-title">{details.name}</h2>
                    <p className="address"> {details.address}</p>   
                    <p><label>City: </label> {details.city}</p>
                    
                </div>
                
            </div>
        )
    }
}

export default HubDetails
import React from "react"
import { Link } from "react-router-dom"

class HubDetails extends React.Component{
    render(){
        const {details} = this.props
        return(
            <div className="details-box"
                style={{backgroundImage: `linear-gradient(to left bottom, rgba(40, 40, 40, 0.78), rgba(0, 0, 0, 5.93)), url(${details.imageURL})`}}
            >
                <Link to ="/" className="close-create-contact">Back</Link>
                <div 
                    className="details-image-box"
                    style={{backgroundImage : `url(${details.imageURL})`}}
                >
                </div> 
                <div className="hub-info" >
                    <h2 style={{fontSize:'2em'}}>{details.name}</h2>
                    <p style={{fontSize:'20px', color: '#e0e0e0'}}><label>City: </label> {details.city}</p>
                    <h4 style={{fontSize:'22px', fontWeight:'bolder'}}>Address</h4>
                    <p style={{fontSize:'20px', color: '#e0e0e0'}}> {details.address}</p>   
                    
                    
                </div>
                
            </div>
        )
    }
}

export default HubDetails
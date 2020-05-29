import React from 'react';
import {Route} from "react-router-dom"
import './contactStyle.css';
import "./mobileStyle.css"
import DisplayHub from "./components/DisplayHub"
import HubDetails from "./components/HubDetails"
import HubData from "./components/Hubdata"
import SearchComponent from "./components/SearchComponent"


class App extends React.Component{
  state={
    hubs: HubData,
    hubDet: "",
    city: ""
  }
  // Function to update the "city" state from the "SearchComponent" Component
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.city)
    
  }
  updateQuery = (formQuery) => {
    this.setState({
        city: formQuery
    })
}
  detailsClick = (id) => {
    let hubIndex
    this.state.hubs.map((hub, index) => {
      if (hub.id === id){
        hubIndex = index
        
      }
      return hubIndex
    })
    const hubState = this.state.hubs[hubIndex]
    this.setState({
      hubDet: hubState
    })
    

  }
  render(){
    return(
      <div>
        
        <h1 style={{textAlign: "center", color:'white', background:'#db3944', margin:'0' }}>
            HUB FINDER
        </h1>
        
        <Route exact path="/" render={() => (
          <SearchComponent 
            handleSubmit= {this.handleSubmit} 
            updateQuery= {this.updateQuery} 
          />
        )}/>
        <Route exact path="/" render={() => (
          <DisplayHub  city={this.state.city} detailsClick = {this.detailsClick}/>
        )}/> 
          
        <Route path="/details">
          <HubDetails details= {this.state.hubDet}/>
        </Route>
      </div>
    )
  }
}

export default App;

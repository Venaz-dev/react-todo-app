import React from "react"

class SearchComponent extends React.Component {
    state = {
        city: ""
    }
    updateCity = (event) =>{
        this.setState ({
            city : event.target.value
        })
    }
    render(){
        return(
            <div className="hub-filter">
                <h1 className = "search-description"
                    style ={{marginTop: '10%'}}
                > 
                    Find the best Tech Hubs within your city </h1>
                <h3 
                    className="search-description"
                    style={{textTransform: "capitalize", fontSize: "26px" }}
                > 
                    Connect with Developers and Designers
                </h3>
                <form className="search-form" onSubmit={this.props.handleSubmit}>
                    
                    <select 
                        name = "city" 
                        value={this.state.city} 
                        className="search-hubs"
                        onChange={this.updateCity}
                    >
                            <option value="" selected> Select a City </option>
                            <option value="port harcourt"> Port Harcourt</option>
                            <option value="lagos"> Lagos</option>
                    </select>
                    
                    <button className="search-button"
                        onClick={() => this.props.updateQuery(this.state.city)}> FIND A HUB </button>
                </form>
            </div>
        )
    }

}

export default SearchComponent
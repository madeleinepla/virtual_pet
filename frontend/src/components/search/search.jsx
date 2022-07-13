import React from "react";
import { Link } from 'react-router-dom';

class search extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {search:""}
        this.update = this.update.bind(this)
    }
    update(e) {
        e.preventDefault()
        this.setState({["search"]:e.currentTarget.value})
        
    }
    componentDidMount() {        
        this.props.requestPets()
        this.props.fetchUsers()
    }
    render () {
        console.log(this.state)
        if (this.props.pets.length===0 || this.props.users.length===0) {
            return null
        }
        let users = this.props.users
        .filter(user=>user.username.toLowerCase().includes(this.state.search.toLowerCase()))
        if (this.state.search === "") {
            users = []
        }  
        return (
            
            <div className="search">
                    <form className="search-bar-container">
                        <input className="search-bar-input"type="text" value={this.state.search} placeholder="search" onChange={this.update}></input>
                        <Link className="search-bar-button"to={`search-results?${this.state.search}`} onClick={()=>this.state.search=""}>Search</Link>
                    </form>
                    <div className="search-users-container">
                        <div className="search-users">

                        {users.map(user=>
                            <Link to={`/users/${user._id}`} style={{ textDecoration: 'none' }} key={user._id}>
                            <div className="search-users-user" key={user.id}>

                            <div className="search-pets">
                                <p className="search-users-username">{user.username}</p>
                                <br />
                                {this.props.pets.filter(pet=>user.pets.includes(pet._id)).map(pet=>
        
                                    <div className="search-pet">
                                        <img className="search-pet-photo" src={pet.profileUrl} alt="pet photo" />
                                        <div>
                                            <p>{pet.name}</p>
                                            <p>{pet.species}</p>
                                            <p>{pet.breed}</p>

                                        </div>
                                    </div>
                                     
                                    )}
                            </div>
                            </div>
                            </Link>
                            )}
                        </div>
                    </div>
            </div>
        )
    }
}
export default search
import React from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";

class UserCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            followers : []
        }
    }

    fetchFollowers = () => {
        axios.get(`https://api.github.com/users/${this.props.user.login}/followers`)
        .then(res => {
            console.log(res);
            this.setState({...this.state,
            followers: [res.data]
            })
        })
        .catch(err => console.log(err));
    }

    render (){
        return (
            <div>
                <img src={this.props.user.avatar_url} alt="avatar" />
                <h2>Name: {this.props.user.name}</h2>
                <p>Bio: {this.props.user.bio}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>Location: {this.props.user.location}</p>
                <button onClick={this.fetchFollowers}>Followers Cards</button>
                <div>
                    {this.state.followers.map(follower => (
                    <FollowerCard follower={follower}  key={follower.id}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserCard
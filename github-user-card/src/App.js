import UserCard from "./components/UserCard";
import React from "react";
import axios from "axios";
import './App.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            user : {}
        }
    }
    changeHandler = e => {
        this.setState({
            ...this.state,
            userName: e.target.value
        })
    }

    fetchUser = e => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(res => {
            console.log(res);
            this.setState({...this.state,
            user: res.data});
        })
        .catch(err => console.log(err))
    }

    render (){
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <h1>Github User Card</h1>
                        <form onSubmit={this.fetchUser}>
                            <input value={this.state.userName} onChange={this.changeHandler} /> 
                            <button>Find User</button>
                        </form>
                        <UserCard user={this.state.user} />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;

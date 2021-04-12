import React from "react";

class FollowerCard extends React.Component {
    render (){
        return (
            <div>
                <h1>{this.props.follower.login}</h1>
            </div>
        )
    }
}

export default FollowerCard
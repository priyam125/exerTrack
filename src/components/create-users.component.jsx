import React, { Component } from 'react';
import axios from 'axios';

class CreateUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '' }
    }

    onChangeUser = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const username = {username: this.state.username}
        console.log(username);
        
        axios.post('http://localhost:5000/users/add/', username)
            .then(res => console.log(res.data));

            this.setState({ username: ' '});
        }


    render() { 
        return ( 
            <div>
                <h1>Create new User</h1>
                <form onSubmit = {this.onSubmit} >
                <div className='form-group'>
                        <label>New User: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.user}
                            onChange={this.onChangeUser}>
                            </input>
                    </div>
                    <div className="form-group">
                            <input type="submit" value="Create New User" className="btn btn-primary" />
                        </div>
                </form>
            </div>
         );
    }
}
export default CreateUsers;
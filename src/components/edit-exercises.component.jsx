import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';



class EditExercises extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
     };
    }



componentDidMount = () =>  {
    axios.get('http://localhost:5000/exercises/'+this.props.match.params.exercisesId)
        .then(res => {
            this.setState({
                username: res.data.username,
                description: res.data.description,
                duration: res.data.duration

            })
        })
        .catch((err) => {
            console.log(err);
        })

        axios.get('http://localhost:5000/users/')
        .then(res => {
            if (res.data.length > 0) {
                this.setState({
                    users: res.data.map(user => user.username)
            })
        }
    })

    }



onChangeUsername = (e) => {
    this.setState({
        username: e.target.value
    });
}
 
onChangeDescription = (e) => {
    this.setState({
        description: e.target.value
    });
}

onChangeDuration = (e) => {
    this.setState({
        duration: e.target.value
    });
}

onChangeDate = (date) => {
    this.setState({
        date: date
    });
}

onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
        username: this.state.username,
        description: this.state.description,
        duration: Number(this.state.duration)
    }

    console.log(exercise);

    axios.patch('http://localhost:5000/exercises/update/'+this.props.match.params.exercisesId, exercise)
            .then(res => console.log(res.data));

            
    window.location='/';
} 





    render() { 
        console.log(this.props)
        return ( 
            <div>
                <h1> Edit exercise</h1>
                <form onSubmit = {this.onSubmit} >
                    <div className='form-group'>
                        <label>Username: </label>
                        <select
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                    this.state.users.map((user) => {
                                        return <option key={user}
                                        value={user}>{user}
                                        </option>   ;
                                    })
                                        
                                    
                                })
                            </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}>
                            </input>
                    </div>
                    <div className='form-group'>
                        <label>Duration(in minutes): </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}>
                            </input>
                    </div>
                        <div className="form-group">
                            <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                        </div>
                </form>
            </div>
         );
    }
}

 
export default EditExercises;
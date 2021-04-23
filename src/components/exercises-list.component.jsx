import React, { Component } from "react";
import axios from 'axios';
import Exercise from "./exercise.component"; 

class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.state = { exercises: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
    }



    /* async componentDidMount() {
        try{
            const exdata = await axios.get('http://localhost:5000/exercises');
            const json = await exdata.json();
            this.setState({ exercises: exdata.data })
    
        } catch(err) {
            console.log(err);
        }
    } */


    handleDelete = (exercisesId) => {
        axios.delete('http://localhost:5000/exercises/'+exercisesId)
            .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== exercisesId)
        })
    }

    

     exerciseList = () => {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} delete={this.handleDelete} key={currentExercise._id}/>;
        })
    }


    render() { 
        return ( 
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{this.exerciseList()}</tbody>
                </table>
            </div>
         );
    }
}



    
 
export default ExerciseList;
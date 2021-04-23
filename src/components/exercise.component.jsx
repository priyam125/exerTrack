import React from 'react';
import { Link } from 'react-router-dom';


const Exercise = (props) => {
    return(
        <tr>
            <td> { props.exercise.username } </td>
            <td> { props.exercise.description } </td>
            <td> { props.exercise.duration } </td>
            <td> { props.exercise.date > 0 ? props.exercise.date.substr(0,10) : props.exercise.date}</td>                          
            <td>
                <Link to ={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => props.delete(props.exercise._id)}>delete</a>
            </td>    
        </tr>
            
    )
}

export default Exercise;


//substr use karne k liye check > 0  imp
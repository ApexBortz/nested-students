import React, { Component } from 'react';
import Score from './Score'

class Student extends Component {
    render() {
        return (
            <>
            <h2>{this.props.student.name}</h2>
            <p>{this.props.student.bio}</p>
             {this.props.student.scores.map(
                element => {
                    return <Score score={element}/>
                }
            )}
            </>
        )
    }
}

export default Student
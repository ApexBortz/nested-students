import React, { Component } from 'react';
import Student from './Student';

class Roster extends Component {
    render() {
        return (
            <>
            {this.props.studentData.map(
                element => {
                    return <Student student={element}/>
                }
            )}
            </>
        )
    }
}

export default Roster
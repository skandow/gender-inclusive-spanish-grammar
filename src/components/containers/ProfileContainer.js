import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProfileContainer extends Component {
    render() {
        return (
                <Redirect to='/home' />
        )
    }
}

export default ProfileContainer
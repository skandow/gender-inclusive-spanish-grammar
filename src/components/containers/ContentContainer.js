import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ContentContainer extends Component {
    render() {
        return (
                <Redirect to={this.props.redirect} />
        )
    }
}

export default ContentContainer
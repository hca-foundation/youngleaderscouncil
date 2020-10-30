import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import ApplicantDetails from './ApplicantDetails'
import NonprofitsList from './NonprofitsList'

export default class Routes extends Component {

    render() {
        return (
            <>
                <Route path="/view" render={props => {
                    {
                        return <NonprofitsList {...props} />
                    }
                }} />

                <Route path="/checkout" render={props => {
                    {
                        return <ApplicantDetails {...props} />
                    }
                }} />
            </>
        )
    }
}
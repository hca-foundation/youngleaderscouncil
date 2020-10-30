import React, { Component } from 'react'

class YLC extends Component {

    state = {
        nonprofitData: []
    }

    componentDidMount() {
        //    get nonprofit data here with graphQL query
        // set in state

    }

    render() {
        return(
            <>
        <h1>Eligible Nonprofits</h1 >
        <table>

        {this.state.nonprofitData.map(data => {
            <>
            <th>{}</th>
            <tr>{}</tr>
            <tr>{}</tr>
            <tr>{}</tr>
            </>
        })}

        </table>
        </>
    )
    }

}

export default YLC
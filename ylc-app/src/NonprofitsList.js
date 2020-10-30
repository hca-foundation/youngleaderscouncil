import React, { Component } from 'react'

class NonprofitsList extends Component {

    state = {
        nonprofitData: []
    }

    componentDidMount() {
        //    get nonprofit data here with graphQL query
        // set in state

    }

    handleSelect = () => {
        // Pass Nonprofit Id, Redirect to Checkout Application Form 
        this.props.history.push({
            pathname: '/checkout',
            // state:  {'id': id}
        })
    }

    render() {
        return(
            <>
        <h1>Eligible Non-Profits List</h1 >
        <table>
        <th onClick={this.handleSelect}>data</th>
        {this.state.nonprofitData.map(data => {
            <>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            {/* <input type='checkbox' id={data}></input> */}
            {/* <tr onClick={()=> this.handleSelect(data.id)}>{data}</tr> */}
            <tr onClick={this.handleSelect}>{data}</tr>
            <tr onClick={this.handleSelect}>{data}</tr>
            </>
        })}

        </table>
        </>
    )
    }

}

export default NonprofitsList
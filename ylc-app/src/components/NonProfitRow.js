import '../App.css';

function NonProfitRow(props) {
    return (
        <div className='non-profit-row'>
            <h1>{this.props.info.name}</h1>
            <p>{this.props.info.description}</p>
            <a href={this.props.info.website}>Visit Website</a>
            {/* TODO: Needs an action button */}
        </div>
    )
}

export default NonProfitRow;
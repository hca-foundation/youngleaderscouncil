import '../App.css';

function NonProfitRow(props) {
    return (
        <div className='non-profit-row'>
            <h1>{props.info.name}</h1>
            <p>{props.info.description}</p>
            <a href={props.info.website}>Visit Website</a>
            {/* TODO: Needs an action button */}
        </div>
    )
}

export default NonProfitRow;
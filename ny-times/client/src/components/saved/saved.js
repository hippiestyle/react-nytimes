import React from 'react'; 

const Saved = props => 

    <li className="list-group-item">
        <span className={"btn-group pull-right"}>
        <a href={props.url} target="__blank">
            <h3>
            {props.title}
            </h3>
        </a>
        <button 
        className="btn btn-default" 
        onClick={() => props.handleDeleteButton(props._id)}>
        Delete
        </button>
        </span>

        <p>Date Published: {props.date}</p>
        </li>

        export default Saved;

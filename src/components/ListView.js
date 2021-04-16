import React from "react";

const AddForm = (props) => {
    return (<React.Fragment>
        <table className="table table-bordered table-hover toDoTable table-centered">
            <thead className="thead-light">
                <tr>
                    <th className="number" scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Time</th>
                    {/* <th scope="col">Edit</th>*/}{/*Commented to just add this edit funtionality */}
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.length ? props.data.map((oneRow, index) => {
                    return (<tr key={index}>
                        <th className="number" scope="row">{index + 1}</th>
                        <td>{oneRow.name}</td>
                        <td>{oneRow.desc}</td>
                        <td>{oneRow.time}</td>
                        {/* <td><button className="btn btn-secondary" type="button" >Edit</button></td> */}
                        <td><button className="btn btn-secondary" type="button" onClick={props.removeToDo.bind(this, oneRow.name, oneRow.desc)}>Remove</button></td>
                    </tr>)
                }) : <tr><th colSpan="5" scope="row">No Data Found</th></tr>}
            </tbody>
        </table>
    </React.Fragment>);
}

export default AddForm;
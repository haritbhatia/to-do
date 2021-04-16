import React from "react";
import '../App.css';
import Utils from '../utils';

const AddForm = (props) => {
    const formSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let name = data.get('name');
        let description = data.get('desc');
        let time = data.get('time');
        let dataToBeSent = { "name": name, "desc": description, "time": time };
        props.onSubmit(dataToBeSent);
        e.target.reset();
    }

    return (<React.Fragment>
        <form className="toDoForm" onSubmit={formSubmit}>
            <div className="form-group mb-3 col-sm-20">
                <label><b>Name</b></label>
                <input type='text' className="form-control" name='name' id="name" />
            </div>
            <div className="form-group mb-3 col-sm-20">
                <label><b>Description</b></label>
                <input type='text' name='desc' className="form-control" />
            </div>
            <div className="form-group mb-3 col-sm-20">
                <label><b>Time</b></label>
                <input type="datetime-local" name='time' className="form-control" min={Utils.formatDateTime(new Date())} />
                <small id="dateHelp" className="form-text text-muted">Please enter the date and time you want this task to be done.</small>
            </div>
            <button style={{ width: "50%" }} type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
    </React.Fragment>);
}

export default AddForm;
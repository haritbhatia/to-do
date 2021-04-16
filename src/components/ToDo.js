import React, { useState } from "react";
import ListView from './ListView';
import AddForm from './AddForm';

const ToDo = () => {
    let [toDo, setToDo] = useState([]);
    const removeToDo = (name, desc) => {
        let newArr = [...toDo];
        newArr = newArr.filter((item) => item.name !== name && item.desc !== desc);
        setToDo(newArr);
    }

    const handleNewAddition = (data) => {
        if (data.name && data.desc) {
            let newArr = [...toDo];
            newArr[newArr.length] = data;
            setToDo(newArr);
        }
    }
    return (<React.Fragment>
        <ListView data={[...toDo]} removeToDo={removeToDo} />
        <AddForm onSubmit={handleNewAddition} />
    </React.Fragment>);
}

export default ToDo;

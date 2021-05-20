import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <React.Fragment className="create-btn-comp">
        
            <div className="create-btn-comp">
                <button className="create-room-btn" onClick={create}>Create room</button>
            </div>


        </React.Fragment>

    );
};

export default CreateRoom;
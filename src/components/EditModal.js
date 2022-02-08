import React from "react";
import Button from "./Button";
import "../styles/EditModal.css";

class EditModal extends React.Component {
    render(){
        if(this.props.edit){
            return (
                <div className= "modal-container">
                    <div className="modal-box">
                        <h3>Edit-task</h3>
                        <div className="input">
                            <input type="text" />
                        </div>
                        <div className="btn-group">
                            <Button text="edit" variant="success"/>
                            <Button text="edit" variant="warning"/>
                        </div>
                    </div>
                </div>
            )
        }
        
        else{
            return null}
    }
}

export default EditModal;
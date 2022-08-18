import React from "react";
import "./ContentModal.scss";

export const ContentModal = props => {
    const { data, show } = props;
    return (
        <div className={`content-modal ${show}`}>
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
            </div>
        </div>
    );
}
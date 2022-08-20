import React, { useState } from 'react';
import { Card } from '../card/Card';
import { ContentModal } from '../content-modal/ContentModal';
import "./MapsContent.scss";

export const MapsContent = () => {
    return (
        <div className="maps-content">
            <h1>Maps</h1>
            <p>These are the places you need to visit, young soldier.</p>
        </div>
    );
}
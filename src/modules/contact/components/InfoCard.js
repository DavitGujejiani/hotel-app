import React from 'react';
import "./InfoCard.css";

function InfoCard() {
    return (
        <div className="w-full border rounded-lg px-8 py-3 text-sm">
            <h1 className="font-bold uppercase text-gray-600 text-md">Contact Information:</h1>
            <div className="info-line">
                <span>Address: </span>
                <p>9 Gabliani Street, Mestia</p>
            </div>
            <div className="info-line">
                <span>Tel: </span>
                <p>+995 599 855 545 / +995 568 85 39 29</p>
            </div>
            <div className="info-line">
                <span>Email: </span>
                <p>houseinmestia@gmail.com</p>
            </div>
        </div>
    );
}

export default InfoCard;
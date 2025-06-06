
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const GreatGrandChildrenList = () => {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        const fetchMyChildrenData = async () => {
            try {
                const response = await fetch('https://mernbackagain.onrender.com/api/family/great_grandchildren', {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                });
        
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setChildren(data);
            } catch (error) {
                console.error("Error fetching family data:", error);
            }
        };

        fetchMyChildrenData();
    }, []);

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>The Great_grandchildren</h2>
            <div className="cards-container">
                {children.length > 0 ? (
                    children.map((child) => (
                        <div className="card" key={child._id}>
                            <img className="card-image" src={child.image} alt={child.name} />
                            <h2 className="card-title">{child.name}</h2>
                            <p className="card-text">Gender: {child.gender}</p>
                            <p className="card-text">Deceased: {child.deceased ? "Yes" : "No"}</p>
            </div>
                    ))
                ) : (
                    <p>No children found.</p>
                )}
            </div>
        </div>
    );
};

export default GreatGrandChildrenList;

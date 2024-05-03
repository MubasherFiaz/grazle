import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(3); // Initial rating value

    const handleStarClick = (value) => {
        // Toggle rating between 0 and value if clicked again
        const newRating = value === rating ? 0 : value;
        setRating(newRating);
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const value = index + 1;
                return (
                    <FaStar
                        key={value}
                        onClick={() => handleStarClick(value)}
                        color={value <= rating ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        style={{ cursor: "pointer",width:"1rem"  }}
                    />
                );
            })}
            
            
        </div>
    );
};

export default StarRating;

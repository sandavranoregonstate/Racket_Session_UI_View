import React from "react";

function SelectLocation({ location , setLocation , list_location }) {
    return (
        <select value={location} onChange={e => setLocation(e.target.value)}>
            <option value="" >Select a Location</option>

            {
                list_location.map((given_location, index) => (
                    <option key={given_location} value={given_location}>
                        {given_location}
                    </option>
                ))}
        </select>
    );
}

export default  SelectLocation ;
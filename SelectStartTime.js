import React from "react";

function SelectType({ start_time , setStartTime , list_start_time }) {
    return (
        <select value={start_time} onChange={e => setStartTime(e.target.value)}>
            <option value="" >Select a Start Time </option>

            {
                list_start_time.map((given_location, index) => (
                    <option key={given_location} value={given_location}>
                        {given_location}
                    </option>
                ))}
        </select>
    );
}

export default  SelectType ;
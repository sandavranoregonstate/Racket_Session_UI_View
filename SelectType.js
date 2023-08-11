import React from "react";

function SelectType({ type , setType , list_type }) {
    return (
        <select value={type} onChange={e => setType(e.target.value)}>
            <option value="" >Select a Type </option>

            {
                list_type.map((given_location, index) => (
                    <option key={given_location} value={given_location}>
                        {given_location}
                    </option>
                ))}
        </select>
    );
}

export default  SelectType ;
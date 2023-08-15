// Register.js
import React, { useState } from 'react';

function LogInPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        last_name: ''

        // Add other fields as necessary
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch( "http://127.0.0.1:8000/new_schedule_and_match/the_register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log('Registered:', data);
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
            />

            <input
                type="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
            />

            <input
                type="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Last Name"
            />
            <button type="submit">Register</button>
        </form>    );
}

export default LogInPage;

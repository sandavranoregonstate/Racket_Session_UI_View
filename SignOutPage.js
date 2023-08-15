// Logout.js
import React from 'react';
import Cookies from 'js-cookie';

function SignOutPage() {
    const handleLogout = async () => {
        const token = Cookies.get('authToken');

        try {
            await fetch("http://127.0.0.1:8000/new_schedule_and_match/logout/", {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            Cookies.remove('authToken'); // Remove the token from cookie
            console.log('Logged out successfully.');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default SignOutPage;

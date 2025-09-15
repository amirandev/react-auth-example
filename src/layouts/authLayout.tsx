import { Link } from "react-router-dom";
import type { ReactNode } from 'react';
import GuestNav from "../components/GuestNav";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div
            style={{
                maxWidth: '500px',
                margin: '50px auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}
        >
            <GuestNav />
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Auth</h2>

            {/* Optional navigation inside auth pages */}
            <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Link to="/login" style={{ marginRight: 10 }}>
                    Login
                </Link>
                <Link to="/register">Register</Link>
            </nav>

            {/* Render the current auth page */}
            {children}
        </div>
    );
}

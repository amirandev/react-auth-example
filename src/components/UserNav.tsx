import { Link } from "react-router-dom";

export default function UserNav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
}
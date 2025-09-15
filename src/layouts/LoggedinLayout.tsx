import { Outlet, Link } from 'react-router-dom';
import UserNav from '../components/UserNav';

export default function LoggedInLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <UserNav />
      <header style={{ padding: '10px 20px', background: '#282c34', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <h1>My App</h1>
        <nav>
          <Link to="/dashboard" style={{ marginRight: 10, color: '#61dafb' }}>Dashboard</Link>
          <Link to="/profile" style={{ color: '#61dafb' }}>Profile</Link>
        </nav>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: '10px 20px', background: '#f1f1f1', textAlign: 'center' }}>
        &copy; 2025 My App
      </footer>
    </div>
  );
}

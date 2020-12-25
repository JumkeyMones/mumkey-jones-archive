import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/archive'>Archive</Link>
      <Link to='/about-mumkey'>About Mumkey</Link>
      <Link to='/credits'>Credits</Link>
    </nav>
  );
}

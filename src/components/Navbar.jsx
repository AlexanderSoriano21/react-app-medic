import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-blue-800">
    <div className="flex justify-between items-center px-4 py-7">
      <h1 className="text-white font-bold">Medic App</h1>
      <ul className="flex">
        <li>
            <Link to="/" className="text-white hover:text-gray-400 px-4 py-2">Home</Link>
        </li>
        <li>
            <Link to="/about" className="text-white hover:text-gray-400 px-4 py-2">About</Link>
        </li>
        <li>
            <Link to="/patients" className="text-white hover:text-gray-400 px-4 py-2">Patients</Link>
        </li>
        <li>
            <Link to="/create" className="text-white hover:text-gray-400 px-4 py-2">New Patient</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

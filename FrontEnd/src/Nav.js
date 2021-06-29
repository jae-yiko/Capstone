import { Link } from 'react-router-dom'

function Nav()
{
    return(
        <nav>
            <h3>Student Management</h3>
            <ul className='nav-links'>
                <Link to = '/home'>
                    <li>
                        Home
                    </li>
                </Link>
                <Link to = '/update'>
                    <li>
                        Update Student Information
                    </li>   
                </Link>
                <Link to = '/add'>
                    <li>
                        Register Student
                    </li>   
                </Link>
                <Link to = '/remove'>
                    <li>
                        Remove Student
                    </li>
                </Link>
        
            </ul>
        </nav>    
    )
}

export default Nav
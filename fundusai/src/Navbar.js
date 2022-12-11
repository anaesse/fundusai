import logo from './images/logo.png'
// import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='px-20 py-8 flex items-center justify-between'>
            <img src={logo} alt='logo' />
            <ol className='flex items-center gap-10 pr-36'>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/'} > How it works</a></li>
                <li><a href={'/'} > About Us</a></li>
                <li><a href={'/'} > Contact</a></li>
            </ol>
        </div>
    </nav>
  );
}

export default Navbar;
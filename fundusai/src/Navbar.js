import logo from './images/logo.png'
// import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='px-20 py-8 sm:flex items-center justify-between'>
            <img src={logo} alt='logo' className='w-[90px]' />
            <ol className='sm:flex items-center gap-3 sm:gap-5 lg:gap-10 md:pr-36'>
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
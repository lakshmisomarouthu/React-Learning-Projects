import NavBar from './NavBar';

export default function Header(){
  return (
    <header className='header'>
      <img src="/logo512.png" width="40px" height="40px" alt="react-logo"/>
      <ul className='nav-list'>
        <li className='nav-list-item'>Pricing</li>
        <li className='nav-list-item'>About</li>
        <li className='nav-list-item'>Contact</li>
      </ul>
    </header>
  );
}
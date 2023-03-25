import logo from '../assets/react.svg';

export default function Header(){
    return (
        <header className='header'>
            <span className='header__logo'><img className='logo' src={logo} alt="React Logo" />ReactFacts</span>
            <span className='header__text'>React Course - Project 1</span>
        </header>
    )
}
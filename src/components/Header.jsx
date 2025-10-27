import logo from '../assets/images/katanemo-logo.png';

export default function Header(){
    return(
        <header>
            <img src={logo} alt="katanemo-logo" />
            <h1>Katanemo Chef</h1>
        </header>
    )
}

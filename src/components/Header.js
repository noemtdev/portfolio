const Header = () => {

    return (
        <header className="py-1 px-6 flex justify-between items-center text-text">
            <img src="/icon.png" style={{width: "5%"}} alt="icon"></img>
            <nav>
                <ul className="flex space-x-4">
                    <li className="text-google-dark-grey"><a href="/">Home</a></li>
                    <li className="text-google-dark-grey"><a href="/projects">Projects</a></li>
                    <li className="text-google-dark-grey"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
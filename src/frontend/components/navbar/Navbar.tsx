import "./Navbar.css"

const Navbar = () => {
    return <nav className="top-nav flex-dir-row">
        <div className="left-nav brandName">
            <span className="brand-firstName">Task</span><span className="brand-lastName">Keeper</span>
        </div>
        <div className="right-nav">
            <span>Welcome</span>
        </div>
    </nav>
}

export {Navbar}
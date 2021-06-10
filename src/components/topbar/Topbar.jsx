import './topbar.scss';
import { Face, MailOutline } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={ "topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">SW</a>
                    <div className="itemContainer">
                        <Face className="icon"/>
                        <a href="tel:0546914164"> 054-6914164</a>
                    </div>
                    <div className="itemContainer"> 
                        <MailOutline className="icon"/>
                        <a href="mailto:sharonwasker@gmail.com">sharonwasker@gmail.com</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen) }>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

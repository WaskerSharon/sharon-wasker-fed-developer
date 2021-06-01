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
                        <span>0546914164</span>
                    </div>
                    <div className="itemContainer"> 
                        <MailOutline className="icon"/>
                        <span>sharonwasker@gmail.com</span>
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

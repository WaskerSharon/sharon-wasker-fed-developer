
import { useEffect, useState } from "react" ;
import PortfolioList from '../portfolioList/PortfolioList';
import DownArrow from '../downArrow/DownArrow';
import './portfolio.scss';
import { 
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
} from "../../data/data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        
        {
            id: "web",
            title: "Web App",
        },
        
        {
            id: "mobile",
            title: "Mobile App",
        },
        
        {
            id: "design",
            title: "Design",
        },
    ];

    useEffect(() =>{

        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected] );
    
    return (
        <div className="portfolio" id="portfolio">
            <h2>Porfolio</h2>
            <ul>
                {list.map(item => (
                    <PortfolioList
                        title = {item.title}
                        active = {selected === item.id}
                        setSelected = {setSelected}
                        id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map( (d) =>(
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
            <DownArrow />
        </div>
    );
}

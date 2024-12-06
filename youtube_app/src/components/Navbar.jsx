import './Navbar.css'
import search from '../assets/search.png'
import mic from '../assets/mic.png'
import create from '../assets/create.png'
import more from '../assets/more.png'
import bell from '../assets/bell.png'
import account from '../assets/Ellipse14.png'
import arrow from '../assets/leftarrow.png'

function Navbar(){
    const data100 = [
        { src: create},
        { src: more},
        { src: bell},
    ];
    const data19 = [
        { text: "All" },
        { text: "Cook Studio"},
        { text: "UX"},
        { text: "Case Study"},
        { text: "Music"},
        { text: "Bangla Lofi"},
        { text: "Tour"},
        { text: "Saintmartin"},
        { text: "Tech"},
        { text: "iphone 13"},
        { text: "User Interface Design"},
        { text: "Computer"}
    ];
    return(
        <>
        <div className="navbar">
            <div className="allaboutsearch">
            <div className="searchbar"><p className="bgt">Search</p></div>
            <div className="searchicon"><img src={search} alt="" className="search" /></div>
            <div className="mic"><img src={mic} alt="" className="micicon" /></div>
            </div>
            <div className="searchbarside">
                {data100.map((detail) => (
                            <img className='side' src={detail.src} />
                        )
                        )}
            </div>
            <div className="ellipse"><img src={account} alt="" className="ellipse" /></div>
            <div className="belowsearchbar">
                {data19.map((detail) => (
                            <div className='map'>{detail.text}</div>
                        )
                        )}
            </div>
            <div className="bor1"></div>
            <div className="bor2"></div>
            <div className="arrow"><img src={arrow} alt="" className="arrow1" /></div>
        </div>
        </>
    )
}

export default Navbar
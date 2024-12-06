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
    ]
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
                <h5 className="map" id='map'>All</h5>
                <h5 className="map" id='left'>Cook Studio</h5>
                <h5 className="map" id='left'>UX</h5>
                <h5 className="map" id='left'>Case Study</h5>
                <h5 className="map" id='left'>Music</h5>
                <h5 className="map" id='left'>Bangla Lofi</h5>
                <h5 className="map" id='left'>Tour</h5>
                <h5 className="map" id='left'>Saintmartin</h5>
                <h5 className="map" id='left'>Tech</h5>
                <h5 className="map" id='left'>iphone 13</h5>
                <h5 className="map" id='left1' >User Interface Design</h5>
                <h5 className="map" id='left2'>Computer</h5>
            </div>
            <div className="bor1"></div>
            <div className="bor2"></div>
            <div className="arrow"><img src={arrow} alt="" className="arrow1" /></div>
        </div>
        </>
    )
}

export default Navbar
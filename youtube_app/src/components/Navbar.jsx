import './Navbar.css'
import search from '../assets/search.png'
import mic from '../assets/mic.png'
import account from '../assets/Ellipse14.png'
import arrow from '../assets/leftarrow.png'
import React,{useState,useEffect} from 'react'

function Navbar(){

    const [ video1 , setVideo1 ] = useState([])
    const [ video2 , setVideo2 ] = useState([])
    const [ m_data , setData ] = useState('');


    useEffect(() => {
        fetch('https://jagjeet-youtube-api-1.onrender.com/data100')
      .then(response => response.json())
      .then(data100 => {
        setVideo1(data100);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
      },[]);

      useEffect(() => {
        fetch('https://jagjeet-youtube-api-1.onrender.com/data19')
      .then(response => response.json())
      .then(data19 => { 
        setVideo2(data19);
        setData(data19.value)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
      },[]);



    // const data100 = [
    //     { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
    //     { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
    //     { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
    // ];
    // const data19 = [
    //     { text: "All" },
    //     { text: "Cook Studio"},
    //     { text: "UX"},
    //     { text: "Case Study"},
    //     { text: "Music"},
    //     { text: "Bangla Lofi"},
    //     { text: "Tour"},
    //     { text: "Saintmartin"},
    //     { text: "Tech"},
    //     { text: "iphone 13"},
    //     { text: "User Interface Design"},
    //     { text: "Computer"}
    // ];
    return(
        <>
        <div className="navbar">
            <div className="allaboutsearch">
            <div className="searchbar"><input type="text" id='search' name='' /></div>
            <div className="searchicon"><img src={search} alt="" className="search" /></div>
            <div className="mic"><img src={mic} alt="" className="micicon" /></div>
            </div>
            <div className="searchbarside">
                {video1.map((detail) => (
                            <img className='side' src={detail.src} />
                        )
                        )}
            </div>
            <div className="ellipse"><img src={account} alt="" className="ellipse" /></div>
            <div className="belowsearchbar">
                {video2.map((detail) => (
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
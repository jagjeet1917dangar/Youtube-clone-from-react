import './Sidebar.css'
import home from '../assets/home.png'
import explore from '../assets/explore.png'
import shorts from '../assets/shorts.png'
import subscription from '../assets/subscription.png'
import library from '../assets/library.png'
import history from '../assets/history.png'
import yourvideo from '../assets/yourvideo.png'
import watchlater from '../assets/watchlater.png'
import liked from '../assets/liked.png'
import downarrow from '../assets/downarrow.png'
import Ellipse1 from '../assets/Ellipse1.png'
import Ellipse2 from '../assets/Ellipse2.png'
import Ellipse3 from '../assets/Ellipse3.png'
import Ellipse4 from '../assets/Ellipse4.png'
import Ellipse5 from '../assets/Ellipse5.png'
import Ellipse7 from '../assets/Ellipse7.png'


function Sidebar() {
    const data1 = [
        { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" },
        { src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" }
    ];
    const data2 = [
        { src: home },
        { src: explore },
        { src: shorts },
        { src: subscription }
    ];
    const data3 = [
        { text: "Home" },
        { text: "Explores" },
        { text: "Shorts" },
        { text: "Subscription" }
    ];
    const data4 = [
        { src: library },
        { src: history },
        { src: yourvideo },
        { src: watchlater },
        { src: liked },
        { src: downarrow }
    ];
    const data5 = [
        { text: "Library" },
        { text: "History" },
        { text: "Your videos" },
        { text: "Watch Later" },
        { text: "Liked videos" },
        { text: "Show more" }
    ];
    const data6 = [
        { src: Ellipse7 },
        { src: Ellipse1 },
        { src: Ellipse2 },
        { src: Ellipse3 },
        { src: Ellipse4 },
        { src: Ellipse5 }
    ];
    const data7 = [
        { text: "Nadir On the Go" },
        { text: "Coke Studio Bangla" },
        { text: "MKBHD" },
        { text: "Figma" },
        { text: "ATC Android ToTo C..." },
        { text: "Alux.com" }
    ];


    return (
        <>
            <div className="sidebar">
                <div className="sidebar1">
                    {data1.map((detail) => (
                        <img className='hambarger' src={detail.src} />
                    )
                    )}
                </div>
                <div className="box1"></div>
                <div className="sidebar2">
                    <div className="sidebar2from1">
                        {data2.map((detail) => (
                            <img className='firstside' src={detail.src} />
                        )
                        )}
                    </div>
                    <div className="sidebar2from2">
                        {data3.map((detail) => (
                            <h5 className='secondside'>{detail.text}</h5>
                        )
                        )}
                    </div>
                </div>
                <div className="border1"></div>
                <div className="sidebar3from1">
                    {data4.map((detail) => (
                        <img className='firstside1' src={detail.src} />
                    )
                    )}
                </div>
                <div className="sidebar3from2">
                    {data5.map((detail) => (
                        <h5 className='secondside2'>{detail.text}</h5>
                    )
                    )}
                </div>
                <div className="border1"></div>
                <h5 className='heading'>SUBSCRIPTION</h5>
                <div className="sidebar4">
                    <div className="sidebar4from1">
                        {data6.map((detail) => (
                            <img className='firstside11' src={detail.src} />
                        )
                        )}
                    </div>
                    <div className="sidebar4from2">
                        {data7.map((detail) => (
                            <h5 className='secondside2'>{detail.text}</h5>
                        )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
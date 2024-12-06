import './Mainmenu.css'
import thumbail1 from '../assets/Thumbnail1.png'
import thumbail2 from '../assets/Thumbnail2.png'
import thumbail3 from '../assets/Thumbnail3.png'
import thumbail4 from '../assets/Thumbnail4.png'
import thumbail5 from '../assets/Thumbnail5.png'
import thumbail6 from '../assets/Thumbnail6.png'
import thumbail7 from '../assets/Thumbnail7.png'
import thumbail8 from '../assets/Thumbnail8.png'
import thumbail9 from '../assets/Thumbnail9.png'
import thumbail10 from '../assets/Thumbnail10.png'
import thumbail11 from '../assets/Thumbnail11.png'
import thumbail12 from '../assets/Thumbnail12.png'
import p1 from '../assets/Ellipse8.png'
import tick from '../assets/verified.png'
import p2 from '../assets/Ellipse9.png'
import p3 from '../assets/Ellipse10.png'
import p4 from '../assets/Ellipse11.png'
import p5 from '../assets/Ellipse12.png'
import p6 from '../assets/Ellipse13.png'
import p7 from '../assets/Ellipse14.png'

function Mainmenu() {
    const data99 = [
        { src:thumbail8,
          src1:p1,
          head1:["Bulbuli|Coke StudioBangla|","Season One|Ritu Raj X Nandita"],
          head2:{h1:"Coke Studio Bangla",h2:"1.5Mviews - 2 days ago",src2:tick}
        }
    ];
    const data98 = [
        { src:thumbail9,
          src1:p2,
          head1:["Infinix Note 12:","AMOLED Helio G88 SoC!"],
          head2:{h1:"ATC Android ToTo Company",h2:"42M views - 2 days ago",src2:tick}
        }
    ];
    const data97 = [
        { src:thumbail10,
          src1:p3,
          head1:["My first UX Design case study -","This got me my first job."],
          head2:{h1:"Saptarshi Prakash",h2:"48K views - 1 years ago",src2:tick}
        }
    ];
    const data96 = [
        { src:thumbail11,
          head1:["My Mix",""],
          head2:{h1:"Lopamudra Mitra,Anupam Roy, and more"}
        }
    ];
    const data95 = [
        { src:thumbail4,
          src1:p4,
          head1:["UX Drsign-What is it?(From AJ","&Smart)"],
          head2:{h1:"AJ&Smar",h2:"150KM views - 3 years ago",src2:tick}
        }
    ];
    const data94 = [
        { src:thumbail5,
          head1:["Mix - Mombati|Mohon Sharif","Dose|Mahib Ahsan ft Anika"],
          head2:{h1:"Mohon Sharif"}
        }
    ];
    const data93 = [
        { src:thumbail6,
          src1:p5,
          head1:["","|48 VISA-FREE"],
          head2:{h1:"Nadir On The Go",h2:"1.7Mviews - 1 years ago",src2:tick}
        }
    ];
    const data92 = [
        { src:thumbail7,
          src1:p6,
          head1:["14 Advanced Tips to Design","Faster in Figma"],
          head2:{h1:"Mizko",h2:"1.5Mviews -1 years ago",src2:tick}
        }
    ];
    const data91 = [
        { src:thumbail12,
          src1:p1,
          head1:["Bulbuli|Coke StudioBangla|","Season One|Ritu Raj X Nandita"],
          head2:{h1:"Coke Studio Bangla",h2:"1.5Mviews - 2 days ago",src2:tick}
        }
    ];
    const data90 = [
        { src:thumbail1,
          src1:p1,
          head1:["Bulbuli|Coke StudioBangla|","Season One|Ritu Raj X Nandita"],
          head2:{h1:"Coke Studio Bangla",h2:"1.5Mviews - 2 days ago",src2:tick}
        }
    ];
    const data89 = [
        { src:thumbail2,
          src1:p1,
          head1:["Bulbuli|Coke StudioBangla|","Season One|Ritu Raj X Nandita"],
          head2:{h1:"Coke Studio Bangla",h2:"1.5Mviews - 2 days ago",src2:tick}
        }
    ];
    const data88 = [
        { src:thumbail3,
          src1:p1,
          head1:["Bulbuli|Coke StudioBangla|","Season One|Ritu Raj X Nandita"],
          head2:{h1:"Coke Studio Bangla",h2:"1.5Mviews - 2 days ago",src2:tick}
        }
    ];

    return (
        <>
             <div className='mainbody'>
                <div className='main1'>
                    {data99.map((detail)=>
                    (
                        <div className='thumbnails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data98.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data97.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data96.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1' id='adele'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2' id='adele1'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data95.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data94.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1' id='adele'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2' id='adele1'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data93.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data92.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data91.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data90.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data89.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                    {data88.map((detail)=>
                    (
                        <div className='thumbanails'>
                            <div><img src={detail.src} alt="" /></div>
                            <div><img src={detail.src1} alt="" /></div>

                            <div className='heading1'>
                                <div>
                                    {detail.head1[0]}
                                </div>
                                <div>
                                    {detail.head1[1]}
                                </div>
                            </div>
                            <div className='heading2'>
                                <div className='h2'>
                                    {detail.head2.h1}
                                    <div className='tick'>
                                        <img src={detail.head2.src2} alt="" />
                                    </div>
                                </div>
                                <div className='h2_1'>{detail.head2.h2}</div>

                            </div>

                            </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Mainmenu
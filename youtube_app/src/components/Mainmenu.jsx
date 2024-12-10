import './Mainmenu.css'
import React,{useEffect,useState} from 'react';


function Mainmenu(){

    const [ video , setVideo ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setVideo(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    
      },[]);

    const data = [
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
            head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
            head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
            head1: ["Infinix Note 12:", "AMOLED Helio G88 SoC!"],
            head2: { h1: "ATC Android ToTo Company", h2: "42M views - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
            head1: ["My first UX Design case study -", "This got me my first job."],
            head2: { h1: "Saptarshi Prakash", h2: "48K views - 1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
            head1: ["My Mix", ""],
            head2: { h1: "Lopamudra Mitra,Anupam Roy, and more" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
            head1: ["UX Drsign-What is it?(From AJ", "&Smart)"],
            head2: { h1: "AJ&Smar", h2: "150KM views - 3 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
            head1: ["Mix - Mombati|Mohon Sharif", "Dose|Mahib Ahsan ft Anika"],
            head2: { h1: "Mohon Sharif" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
            head1: ["", "|48 VISA-FREE"],
            head2: { h1: "Nadir On The Go", h2: "1.7Mviews - 1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
            head1: ["14 Advanced Tips to Design", "Faster in Figma"],
            head2: { h1: "Mizko", h2: "1.5Mviews -1 years ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
            head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
            head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
            head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
            head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
            head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
            head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        },
        {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
            src1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
            head1: ["Bulbuli|Coke StudioBangla|", "Season One|Ritu Raj X Nandita"],
            head2: { h1: "Coke Studio Bangla", h2: "1.5Mviews - 2 days ago", src2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" }
        }
    ];
    return (
        <>
            <div className='mainbody'>
                <div className='main1'>
                    {video.map((detail) =>
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
                </div>
            </div>
        </>
    )
}

export default Mainmenu
















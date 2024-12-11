// import './Mainmenu.css'
// import React,{useEffect,useState} from 'react';


// function Mainmenu(){

// const [ video , setVideo ] = useState([])

// useEffect(() => {
//     fetch('https://jagjeet-youtube-api-1.onrender.com/data')
//   .then(response => response.json())
//   .then(data => {
//     setVideo(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

//   },[]);
// return (
//     <>
//         <div className='mainbody'>
//             <div className='main1'>
//                 {video.map((detail) =>
//                 (
//                     <div className='thumbnails'>
//                         <div><img src={detail.src} alt="" /></div>
//                         <div><img src={detail.src1} alt="" /></div>

//                         <div className='heading1'>
//                             <div>
//                                 {detail.head1[0]}
//                             </div>
//                             <div>
//                                 {detail.head1[1]}
//                             </div>
//                         </div>
//                         <div className='heading2'>
//                             <div className='h2'>
//                                 {detail.head2.h1}
//                                 <div className='tick'>
//                                     <img src={detail.head2.src2} alt="" />
//                                 </div>
//                             </div>
//                             <div className='h2_1'>{detail.head2.h2}</div>

//                         </div>

//                     </div>
//                 )
//                 )}
//             </div>
//         </div>
//     </>
//     )
// }

// export default Mainmenu







// import './Mainmenu.css';
// import React, { useEffect, useState } from 'react';

// function Mainmenu() {
//     const [videos, setVideos] = useState([]);
//     const [query, setQuery] = useState('');

//     const apiKey = "AIzaSyD4q-1n1rTI5OXmmV0-QFZw4SDG7bmKdBQ";

//     const searchYouTube = (searchQuery) => {
//         const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${searchQuery}&key=${apiKey}`;
//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 const videoData = data.items.map((item) => ({
//                     id: item.id.videoId,
//                     title: item.snippet.title,
//                     thumbnail: item.snippet.thumbnails.default.url,
//                     channelTitle: item.snippet.channelTitle,
//                 }));
//                 setVideos(videoData);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (query.trim() !== '') {
//             searchYouTube(query);
//         }
//     };

//     return (
//         <>
//             <div className="mainbody">
//                 {/* Search Bar */}
//                 <form onSubmit={handleSearch} className="search-bar">
//                     <input className='pushpa'
//                         type="text"
//                         placeholder="Search"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                     />
//                     <button className='submit' type="submit"><img src="http://localhost:5173/src/assets/search.png" alt="" /></button>
//                 </form>

//                 {/* Video Thumbnails */}
//                 <div className="main1">
//                     {videos.map((video) => (
//                         <div key={video.id} className="thumbnails">
//                             <img src={video.thumbnail} className='size' alt={video.title} />
//                             <div className="heading1">{video.title}</div>
//                             <div className="heading2">{video.channelTitle}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Mainmenu;

// import './Mainmenu.css';
// import React, { useState } from 'react';

// function Mainmenu() {
//     const [videos, setVideos] = useState([]);
//     const [query, setQuery] = useState('');
//     const [selectedVideoId, setSelectedVideoId] = useState(null);
//     const [selectNumber, setSelectedNumber] = useState(1);

//     const apiKey = "AIzaSyC4Y28COw5PN69-0rPV7t5hWY9KUU1s0Sc";

//     const searchYouTube = (searchQuery) => {
//         const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${selectNumber}&q=${searchQuery}&key=${apiKey}`;
//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 const videoData = data.items.map((item) => ({
//                     id: item.id.videoId,
//                     title: item.snippet.title,
//                     thumbnail: item.snippet.thumbnails.default.url,
//                     channelTitle: item.snippet.channelTitle,
//                 }));
//                 setVideos(videoData);
//                 setSelectedVideoId(null); // Reset selected video
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (query.trim() !== '') {
//             searchYouTube(query);
//         }
//     };


//     const handleVideoClick = (videoId) => {
//         setSelectedVideoId(videoId); // Set the clicked video's ID
//     };

//     const handleInputChange = (event) => {
//         const value = event.target.value; 
//         setSelectedNumber(Number(value)); 
//     };

//     return (
//         <>
//             <div>
//                 <input className='state'
//                     type="number"
//                     value={selectNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter a number"
//                 />
//             </div>
//             <div className="mainbody">
//                 {/* Search Bar */}
//                 <form onSubmit={handleSearch} className="search-bar">
//                     <input
//                         className="pushpa"
//                         type="text"
//                         placeholder="Search"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                     />
//                     <button className="submit" type="submit">
//                         <img src="http://localhost:5173/src/assets/search.png" alt="" />
//                     </button>
//                 </form>

//                 {/* Video Player */}
//                 {selectedVideoId && (
//                     <div className="video-player">
//                         <iframe
//                             title="YouTube Video Player"
//                             width="600"
//                             height="315"
//                             src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                     </div>
//                 )}

//                 {/* Video Thumbnails */}
//                 <div className="main1">
//                     {videos.map((video) => (
//                         <div
//                             key={video.id}
//                             className="thumbnails"
//                             onClick={() => handleVideoClick(video.id)} // Handle click
//                         >
//                             <img
//                                 src={video.thumbnail}
//                                 className="size"
//                                 alt={video.title}
//                             />
//                             <div className="heading1">{video.title}</div>
//                             <div className="heading2">{video.channelTitle}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Mainmenu;

import './Mainmenu.css';
import React, { useState } from 'react';

function Mainmenu() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedVideoId, setSelectedVideoId] = useState(null);
    const [selectNumber, setSelectedNumber] = useState(12);

    const apiKey = "AIzaSyC4Y28COw5PN69-0rPV7t5hWY9KUU1s0Sc";

    const searchYouTube = (searchQuery) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${selectNumber}&q=${searchQuery}&key=${apiKey}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const videoData = data.items.map((item) => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.high
                        ? item.snippet.thumbnails.high.url
                        : item.snippet.thumbnails.medium.url,
                    channelThumb: item.snippet.cahnnelThumb,
                    channelTitle: item.snippet.channelTitle,
                }));
                setVideos(videoData);
                setSelectedVideoId(null);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            searchYouTube(query);
        }
    };

    const handleVideoClick = (videoId) => {
        setSelectedVideoId(videoId);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSelectedNumber(Number(value));
    };

    return (
        <>
            <div className="state">
                <input className='state2'
                    type="number"
                    value={selectNumber}
                    onChange={handleInputChange}
                    placeholder="Enter a number"
                />
            </div>
            <div className="mainbody">
                <form onSubmit={handleSearch} className="search-bar">
                    <input
                        className="pushpa"
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="submit" type="submit">
                        <img src="http://localhost:5173/src/assets/search.png" alt="" />
                    </button>
                </form>
                {selectedVideoId && (
                    <div className="video-player">
                        <iframe
                            title="YouTube Video Player"
                            width="1000"
                            height="415"
                            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                <div className="main1">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="thumbnails"
                            onClick={() => handleVideoClick(video.id)}
                        >
                            <img
                                src={video.thumbnail}
                                className="size"
                                alt={video.title}
                            />
                            <div className="heading1">{video.title}</div>
                            <div className="heading2">{video.channelTitle}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Mainmenu;











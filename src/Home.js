// src/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const options = {
                method: 'GET',
                url: 'https://youtube-v31.p.rapidapi.com/search',
                params: {
                    relatedToVideoId: '7ghhRHRP6t4',
                    part: 'snippet',
                    type: 'video',
                    maxResults: '50'
                },
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
                    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const data = response.data.items;
                console.log(data);
                setVideos(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <h1>Related YouTube Videos</h1>
            <ul>
                {videos.map((video, index) => (
                    <li key={index}>
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.description}</p>
                        {/* You can display other details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

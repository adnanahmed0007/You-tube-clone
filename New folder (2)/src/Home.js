import React, { useEffect, useState } from "react";
import youtuneImage from "./youtune.png";
import Mycontext from "./Context";
import { useContext } from "react";
import "./Home.css";

const Home = () => {
  const API_KEY = "AIzaSyCbogx9khtIzPZPHthhGspBQRCflVedwR8";
  const [click2, setClick2] = useState(false);
  const [savedata, setdata] = useState([]);
  const {
    
    Email,

    Password,
  } = useContext(Mycontext);
  useEffect(() => {
    if (click2) {
      async function fetchData() {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=40&order=relevance&regionCode=US&key=${API_KEY}`
        );
        if (response) {
          const data = await response.json();
          setdata(data.items);
          console.log(data.items);
        }
      }
      fetchData();
    }
  }, [click2]);

  return (
    <div>
      <div className="header-container">
        <h1 className="youtubewrite">YouTube</h1>
        <img className="youImage" src={youtuneImage} alt="YouTube logo" />
      </div>

      <button onClick={() => setClick2(!click2)}>Click</button>
      {Email&&Password && click2 ? (
        <div className="videos-container">
          {savedata && savedata.length > 0
            ? savedata.map((video) => (
                <div className="video-card" key={video.id.videoId}>
                  <h3 className="videoh2">{video.snippet.title}</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))
            : "no video found"}
        </div>
      ) : (
        <div>
          <h1 className="not_access">
            Please login to access to watch Youtube First
          </h1>
        </div>
      )}
    </div>
  );
};

export default Home;

import React from 'react'
import { Link } from 'react-router-dom'
import f1 from '../assets/1f.png';
import f2 from '../assets/2f.png';
import f3 from '../assets/3f.png'; // Adjust the path if necessary



export default function Home() {

  const testing = () =>{
      axios.get("/")
  }
  return (
    <>
    <div className="wrap">
      <div className="get-started">
          <h1 className='gradient-text'>Trajectory</h1>
          <h1 className='path'>Your PathFinder to Success!</h1>
          <button onClick={testing}>
            <Link to = "/login">Get Started</Link>
            </button>
      </div>
      <div className="feature">
        <div className="main-box">
          <div className="box">
            <h1>Custom Roadmaps</h1>
            <p>AI Generated Roadmaps for Specific Carrers</p>
            <img src={f1}></img>
          </div>
          <div className="box">
          <h1>Elaborate</h1>
          <p>Elaborate Your Paths for Resources and Videos</p>
          <img src={f2}></img>
            </div>
          <div className="box">
          <h1>Breakdown Info</h1>
          <p>Breakdown videos and articles faster.</p>
          <img src={f3}></img>
            </div>
        </div>
      </div>
      <footer>
        <h1>Made by Meerthika</h1>
      </footer>
    </div>
      
    </>
  )
}

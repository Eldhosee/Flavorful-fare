
import video from './assets/video.mp4'
import './styles/home.css'
function Video() {
  return (
    <div className='main'>
      
        <div className='card ' >
          <h1>Flavorful Fare: The Recipe Haven"</h1>
          <br /><br />
          <h5 id='quotes'>"Welcome to 'Savor the Flavors' -your ultimate Recipe Paradise! Discover a world of culinary inspiration where you can unleash your inner chef. Explore our extensive collection of carefully crafted recipes, expert tips, and step-by-step guidance to elevate your dining experiences and create delicious masterpieces in the kitchen.</h5>
        </div>
     
      <div >

        <video
          className="slider-video"
          src={video}
          loop
          autoPlay
          muted
          loading="lazy"
          height={500}
        ></video>
      </div>
    </div>



  );
}

export default Video;
import austinTrip from "../images/Austin-trip.png";
import newMexico from "../images/new-mexico.png";
import msaSocials from "../images/msa-socials.png";
import "../css/imageGallery.css";
import { Link } from "react-router-dom";

function ImageGallery() {
  return (
    <>
      <div class="black-box-2"></div>

      <div class="image-gallery">
        <h2>Event Highlights</h2>
        <div class="gallery-grid">
          <div class="gallery-item">
            <Link to="https://photos.google.com/share/AF1QipPGnIbXJE5xMUyWUxEU0a9McPZ1O0RcksrZSLYnKsIAuJFfGYXwVJtLsp7rZ4G-8A?key=SmNpMDJzM3lRMVlaNmxfY3lGUXJCUW9ET1FBZmRn">
              <h2 class="heading">Austin Trip '23</h2>
              <img src={austinTrip} alt="Event 1" />
              <div class="overlay"></div>
            </Link>
          </div>
          <div class="gallery-item">
            <Link to="https://photos.google.com/share/AF1QipM0H7iIoJOk5LymYkqhDm0azcfwjFYn0AUUkdLQq2YOzeeT_EuHtNQ9ni1cek1fSg?key=VC1JMWloc1FyazBNLUNCb21kMFU3czhPUjNqVnRn">
              <h2 class="heading">New Mexico '24</h2>
              <img src={newMexico} alt="Event 2" />
              <div class="overlay"></div>
            </Link>
          </div>
          <div class="gallery-item">
            <Link to="https://photos.google.com/share/AF1QipM0H7iIoJOk5LymYkqhDm0azcfwjFYn0AUUkdLQq2YOzeeT_EuHtNQ9ni1cek1fSg?key=VC1JMWloc1FyazBNLUNCb21kMFU3czhPUjNqVnRn">
              <h2 class="heading">MSA Socials</h2>
              <img src={msaSocials} alt="Event 3" />
              <div class="overlay"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGallery;

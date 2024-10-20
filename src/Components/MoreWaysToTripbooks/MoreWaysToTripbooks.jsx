import './MoreWaysToTripbooks.css'; 
import solo from '../../assets/solo.jpg';
import family from '../../assets/family.jpg';
import couples from '../../assets/couples.png';

const MoreWaysToTripbooks = () => {
  return (
    <div className="more-ways-section">
      <h2>More Ways to TripBooks</h2>
      
      <div className="tripbook-slides">
        <div className="tripbook-slide">
          <img src={solo} alt="Solo Book" className="tripbook-image" />
          <h3>Solo Book</h3>
          <p>Perfect for solo travelers who want to document their personal adventures in style.</p>
        </div>
        
        <div className="tripbook-slide">
          <img src={family} alt="Family Book" className="tripbook-image" />
          <h3>Family Book</h3>
          <p>Preserve the memories of your family trips and create a lasting treasure for everyone.</p>
        </div>
        
        <div className="tripbook-slide">
          <img src={couples} alt="Couples Book" className="tripbook-image" />
          <h3>Couples Book</h3>
          <p>Capture the moments of love and togetherness with a special book designed for couples.</p>
        </div>
      </div>
      
      <button className="order-button">Order Your Tripbook</button>
    </div>
  );
};

export default MoreWaysToTripbooks;

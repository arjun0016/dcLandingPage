import React, { useEffect } from 'react';
import "../styles/review.css"

const Review = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='review'>
      <div className="elfsight-app-d23f6a6a-649b-4665-9347-de8488e5daad" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Review;

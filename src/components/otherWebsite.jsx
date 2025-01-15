import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OtherWebsite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to a different website in a new tab
    window.open('https://example.com', '_blank');

    // Navigate to the homepage (or any other route) if needed
    navigate('/');
  }, [navigate]);

  return <div>Redirecting to another website...</div>;
};

export default OtherWebsite;

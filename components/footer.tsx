import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-6 w-full">
      <div className="container mx-auto px-4 md:px-0 text-center">
        <p className="mb-2 md:mb-4">About Us: We are dedicated to providing the best services to our customers.</p>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="hidden md:inline">Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="hidden md:inline">Twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>
        <p className="mt-2 md:mt-4">
          © {new Date().getFullYear()} Wince Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
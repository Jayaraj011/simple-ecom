

import bgfoot from "../assets/website/footer-pattern.jpg";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPhone,
  FaLocationArrow,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${bgfoot})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <footer style={BannerImg} className="text-white pt-4">
      <div className="container">

        <div className="row text-center text-md-start">

          
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">Shopping</h2>
            <p>
              Your one-stop destination for quality products at the best price.
              Shop smart, shop fast, shop easy.
            </p>
          </div>

         
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Quick Links</h4>

            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/product" className="text-white text-decoration-none">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/cart" className="text-white text-decoration-none">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Contact Us</h4>

            <p>
              <FaLocationArrow className="me-2" />
              Madurai, Tamil Nadu
            </p>

            <p>
              <FaPhone className="me-2" />
              +91 98474 64822
            </p>

            <p>
              <FaEnvelope className="me-2" />
              shop@email.com
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-white fs-4 me-3">
                <FaInstagram />
              </a>

              <a href="#" className="text-white fs-4 me-3">
                <FaLinkedin />
              </a>

              <a href="#" className="text-white fs-4">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr />

        <div className="text-center pb-3">
          <p className="mb-0">
            © 2026 Shopping Website | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
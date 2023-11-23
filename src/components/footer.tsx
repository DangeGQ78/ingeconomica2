import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import "../styles/footer.style.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="icons">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <BsYoutube />
            </a>
          </div>

          <div className="services">
            <ul>
              <li>
                <a href="#">Contáctenos</a>
              </li>
              <li>
                <a href="#">Nuestros servicios</a>
              </li>
              <li>
                <a href="#">Políticas de privacidad</a>
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
            </ul>
          </div>

          <div className="copy">
            Copyright © 2023 - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}

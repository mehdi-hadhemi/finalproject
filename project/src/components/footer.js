import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-item">
        <li>
          <a
            style={{ color: "white", fontWeight: "bold" }}
            target="-blanck"
            href=""
          >
            My account
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            sign up{" "}
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            sing in
          </a>
        </li>
      </ul>
      <ul className="footer-item">
        <li>
          <a
            style={{ color: "white", fontWeight: "bold" }}
            target="-blanck"
            href=""
          >
            Home page
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            browse event
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            create event
          </a>
        </li>
      </ul>
      <ul className="footer-item">
        <li>
          <a
            style={{ color: "white", fontWeight: "bold" }}
            target="-blanck"
            href=""
          >
            About us
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            sponsered events{" "}
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            statestics
          </a>
        </li>
      </ul>
      <ul className="footer-item">
        <li>
          <a
            style={{ color: "white", fontWeight: "bold" }}
            target="-blanck"
            href="">
            About us
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            sponsered events{" "}
          </a>
        </li>
        <li>
          <a style={{ color: "grey" }} target="-blanck" href="">
            statestics
          </a>
        </li>
      </ul>


      <div>
        <p
          className="footer-item"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Around the web
        </p>
        <ul className="social-footer2">
          <li className="">
            <a
              title="Facebook"
              target="_blank"
              href="https://www.facebook.com/"
            >
              <i style={{ color: "#4167b2" }} className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="">
            <a href="https://www.google.com/" target="_blank" title="Facebook">
              <i
                style={{ color: "#e7302a" }}
                className="fab fa-google-plus-g"
              ></i>
            </a>
          </li>
          <li className="">
            <a title="Twitter" target="_blank" href="https://www.twitter.com/">
              <i style={{ color: "#4b92dc" }} className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="">
            <a
              title="instagram"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <i style={{ color: "#fe4b2b" }} className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;

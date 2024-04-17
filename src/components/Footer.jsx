import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">Sign In</a>
          <a href="src/pages/SignUpPage">Sign Up</a>
          <a href="#">Contact us</a>
          <a href="#">About</a>
        </div>
        <p className="love">
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/kacijcox.com"
          >
            &nbsp; Kaci Cox
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
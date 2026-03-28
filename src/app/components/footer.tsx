function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="footerInfo">
        <div>
          <h4 className="font-bold">ItaReport</h4>
          <p>Platform for community issue reports.</p>
        </div>
        <div>
          <h4 className="font-bold">More Information</h4>
          <p></p>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/terms">Terms of Use and Privacy Policy</a>
            </li>
            <li>
              <a href="/technologies">Technologies</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p></p>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/inovilar/">
            <i className="pi pi-instagram"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/inovilar">
            <i className="pi pi-facebook"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:contato@inovilar.com.br">
            <i className="pi pi-envelope"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.beacons.ai/inovilar/">
            <i className="pi pi-link"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <span>©2023 ItaReport</span>
      </div>
    </footer>
  );
}

export default Footer;

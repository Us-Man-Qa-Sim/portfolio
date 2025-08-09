const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2 items-center">
        <img src="/assets/usman-logo.png" alt="Usman Qasim" className="w-6 h-6 rounded-full" />
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3 items-center">
        <a
          href="https://github.com/Us-Man-Qa-Sim"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/usman-qasim-fullstack/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform">
          <img src="/assets/linkedin-svgrepo-com.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/usmanthegame422025/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:scale-110 transition-transform">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Usman Qasim. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

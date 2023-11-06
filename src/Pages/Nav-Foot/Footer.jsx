import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <div>
        <footer className="footer p-10  text-base-content">
          <aside>
            <img className="w-52" src="/public/Screenshot_from_2023-11-05_12-27-59-removebg-preview.png" alt="" />
            <p>
              FoodShare Unity.
              <br />
              Providing volunteering service since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <Link to='/available' className="link link-hover">Food Provide</Link>
            <a className="link link-hover">Donation</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <Link to='/about' className="link link-hover">About us</Link>
            
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;
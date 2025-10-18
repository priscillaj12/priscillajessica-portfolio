import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
// import "./FooterStyles.css";

export default function Footer() {
  return (
    <footer style={{backgroundColor: "#03045e", padding: "20px"}}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Priscilla Jessica.</p>
            <div className="social-icons">
                <a href="priscillajssc2@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope fa-2x" style={{ color: "white" }}></i>
                </a>
                <a href="https://www.linkedin.com/in/priscilla-jssc" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x" style={{ color: "white" }}></i>
                </a>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x" style={{ color: "white" }}></i>
                </a>
                <a href="https://vercel.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors" aria-label="Vercel">
                    <SiVercel size={30} style={{ color: "white" }}/>
                </a>
            </div>
        </div>
    </footer>
  );
}
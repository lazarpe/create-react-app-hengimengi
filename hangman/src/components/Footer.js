import React from "react"
import "./Footer.css";
    
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="footer-copyright text-center py-3">
    &copy; {new Date().getFullYear()} Copyright: <p>Lazar Petrovic</p>
    </div>
</footer>

export default Footer
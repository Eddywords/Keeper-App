import React from "react";

const fullYear = new Date().getFullYear();
function Footer() {
    return <footer><p>Copyright {fullYear}</p></footer>
}

export default Footer;
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Saurab Poudel</h4>
            <h3 className="list-unstyled">
              <li>061-123455</li>
              <li>Bhaktapur,Nepal</li>
              <li>Suryabhumi Chowk </li>
            </h3>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Lorem Ipsum</h4>
            <ui className="list-unstyled">
              <li>KDSKSDKDSK</li>
              <li>SSJS SJSJ</li>
              <li>JSJSD SJDSD</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Lorren Ipsum is a dummy text</h4>
            <ui className="list-unstyled">
              <li>DFSKFSKF</li>
              <li>SDKDS DSSJD</li>
              <li>DSJSD SDJSDJ</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Saurab Poudel | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
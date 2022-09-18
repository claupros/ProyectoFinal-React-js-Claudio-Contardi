import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="pers main-footer ">
        <div className="pers container">
          <div className="row">
            <div className="col d-flex flex-column align-items-center justify-content-center">
              <div id="qrcode">
                <img
                  src="https://www.codigos-qr.com/qr/php/qr_img.php?d=http%3A%2F%2Flocalhost%3A3000%2Fcomponentes&s=4&e=m"
                  alt="Generador de Códigos QR Codes"
                />
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center">
              <div>
                <p className="">Ayuda</p>
              </div>
              <button className="btn btn-outline-info align-self-center">
                Contactanos
              </button>
            </div>
            <div className="col">
              <p>Seguinos</p>
              <div>
                <i className="fa-brands fa-facebook" />
              </div>
              <div>
                <i className="fa-brands fa-linkedin" />
              </div>
              <div>
                <i className="fa-brands fa-instagram" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

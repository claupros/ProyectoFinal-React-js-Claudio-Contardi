import React from "react";
import "./ribbon.css";

export const Ribbon = () => {
  return (
    <>
      <div id="ribbon" className="container-fluid">
        <div id="birthday" className="container w-50 pl-5 rounded">
          <div className="row align-items-center">
            <div className="col-sm p-3">
              <img
                src="https://www.mundocanino.com.ar/img/hm-02.jpg"
                className="w-75 mx-auto d-block"
                alt="ribbon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

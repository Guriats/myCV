import React from "react";
import "./Languages.css";
const Languages = ({ languages }) => {
  return (
    <div>
      <div className="language card">
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="language">📕 {item.language}</p>
              <p>{item.wrlevel}</p>
              <p>{item.splevel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Languages;
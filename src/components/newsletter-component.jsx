import React, { useState } from "react";
import "../css/newsletter.css"; // Import the CSS file for styling
import pdf1 from "../images/MSA August Newsletter[1].pdf";
import pdf2 from "../images/MSA September Newsletter[1].pdf";

const ComingSoon = () => {
  const archivePdfs = []

  const pdfFiles = [
    { month: "September", file: pdf2 },
    { month: "August", file: pdf1 }
  ];
  const [isArchiveOpen, setArchiveOpen] = useState();
  const [ishovered, setHovered] = useState();

  const toggleArchive = () => {
    setArchiveOpen(!isArchiveOpen);
  };

  const toggleHover = () => {
    setArchiveOpen(!isArchiveOpen);
    setHovered(!ishovered);
  };

  return (
    <div className="newsletter-container">
      <h3 className="newsletter-header">Welcome to our Newsletter!</h3>
      <div className="inner-container">
        {pdfFiles.map((pdf, index) => (
          <div className="pdf-box" key={index}>
            <h3>{pdf.month} Newsletter</h3>
            <iframe
              src={pdf.file}
              title={`Newsletter-${pdf.month}`}
              className="pdf-frame"
            />
          </div>
        ))}
      </div>

      <div className="archive-section">
        { window.width > "600px" ?
        <button onClick={toggleArchive} className="archive-toggle-button">
          {isArchiveOpen ? "Hide Archives" : "Show Archives"}
        </button> :
          <button onClick={toggleHover} className="archive-toggle-button">
          {isArchiveOpen ? "Hide Archives" : "Show Archives"}
          </button>
        }
        <div className="adjusting-border"></div>

        <div className={`archive-content ${isArchiveOpen ? "open" : "closed"}`}>
        {archivePdfs.map((pdf, index) => (
          <div className="pdf-box" key={index}>
            <h3>{pdf.month} Newsletter</h3>
            <iframe
              src={pdf.file}
              title={`Newsletter-${pdf.month}`}
              className="pdf-frame"
            />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

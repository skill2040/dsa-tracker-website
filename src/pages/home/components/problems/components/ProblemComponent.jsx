import React, { useState } from "react";
import "./style.css";
import Microsoft from "./styles/Microsoft.png";
import Google from "./styles/Google.jpg";
import Telegram from "./styles/Telegram.png";
import Apple from "./styles/Apple.png";
import Dell from "./styles/Dell.png";
import Spotify from "./styles/Spotify.png";
import LeetCode from "./styles/LeetCode.png";
import GFG from "./styles/GFG.svg";
import { IoNewspaperOutline, IoNewspaper } from "react-icons/io5";
import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function ProblemComponent({
  problemName,
  difficultyLevel,
  URL,
}) {
  // const [expanded, setExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(false);
  const [hoveredAdd, setHoveredAdd] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(false);
  const [hoveredBookMark, setHoveredBookMark] = useState(false);
  // const toggleExpansion = () => {
  //   setExpanded(!expanded);
  // };
  // const hideLogos = () => {
  //   setExpanded(false);
  // };
  const handleMouseEnterSolution = () => {
    setHoveredSolution(true);
    setShowText(true);
  };

  const handleMouseLeaveSolution = () => {
    setHoveredSolution(false);
    setShowText(false);
  };

  const handleMouseEnterAdd = () => {
    setHoveredAdd(true);
    setShowText(true);
  };

  const handleMouseLeaveAdd = () => {
    setHoveredAdd(false);
    setShowText(false);
  };
  const handleMouseEnterStar = () => {
    setHoveredStar(true);
    setShowText(true);
  };

  const handleMouseLeaveStar = () => {
    setHoveredStar(false);
    setShowText(false);
  };
  const handleMouseEnterBookMark = () => {
    setHoveredBookMark(true);
    setShowText(true);
  };

  const handleMouseLeaveBookMark = () => {
    setHoveredBookMark(false);
    setShowText(false);
  };
  return (
    <div className="problem-rectangle">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          //   marginBottom: "0.5rem",
        }}
      >
        <h1
          className="problem-rectangle-heading"
          style={{ position: "relative" }}
        >
          {problemName}
        </h1>
        <div
          className="problem-difficulty-indicator"
          style={{ color: "#E3C525" }}
        >
          {difficultyLevel}
        </div>
      </div>
      <div style={{ marginLeft: "1.5rem" }} className="problem-logo-text">
        <img
          className="problem-rectangle-company-logo"
          src={Microsoft}
          alt="Microsoft"
        ></img>
        <img
          className="problem-rectangle-company-logo"
          src={Google}
          alt="Google"
        ></img>
        <img
          className="problem-rectangle-company-logo"
          src={Telegram}
          alt="Telegram"
        ></img>

        <img
          className="problem-rectangle-company-logo"
          src={Dell}
          alt="Telegram"
        ></img>
        <img
          className="problem-rectangle-company-logo"
          src={Apple}
          alt="Apple"
        ></img>
        <img
          className="problem-rectangle-company-logo"
          src={Spotify}
          alt="Spotify"
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="problem-rectangle-solve-problem-container">
          <a href={URL} target="_blank" rel="noopener noreferrer">
            <img
              className="GFG-logo-problem-solve-rectangle"
              style={{ cursor: "pointer" }}
              src={GFG}
              alt="GFG"
            ></img>
          </a>
          <img
            className="leetcode-logo-problem-solve-rectangle"
            style={{
              marginBottom: "-0.3rem",
              cursor: "pointer",
            }}
            src={LeetCode}
            alt="LeetCode"
          ></img>
        </div>
        {/* <div 
            className="problem-component-icon-container"
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            style={{marginLeft:'1rem'}}
          >
            <IoSolutionOutline 
              style={{ height: 'auto', width: '25px', cursor: 'pointer'}}
              title={showText ? "Solution" : ""}
            />
           
          </div> */}
        <div className="problem-component-icon-outer-container">
          <div
            className="problem-component-icon-container"
            onMouseEnter={handleMouseEnterSolution}
            onMouseLeave={handleMouseLeaveSolution}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: hoveredSolution ? "scale(1.1)" : "scale(1)",
              display: "inline-block",
              marginLeft: "1rem",
              marginTop: "0.3rem",
            }}
          >
            {hoveredSolution ? (
              <IoNewspaper
                className="problem-component-IoNewspaper"
                // style={{ height: "auto", width: "25px", cursor: "pointer" }}
                title={showText ? "Solution" : ""}
              />
            ) : (
              <IoNewspaperOutline
                className="problem-component-IoNewspaperOutline"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
              />
            )}
          </div>
          <div
            className="problem-component-icon-container"
            onMouseEnter={handleMouseEnterAdd}
            onMouseLeave={handleMouseLeaveAdd}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: hoveredAdd ? "scale(1.1)" : "scale(1)",
              display: "inline-block",
              marginLeft: "1rem",
              marginTop: "0.3rem",
            }}
          >
            {hoveredAdd ? (
              <MdAddCircle
                className="problem-component-MdAddCircle"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
                title={showText ? "Add Notes" : ""}
              />
            ) : (
              <MdAddCircleOutline
                className="problem-component-MdAddCircle"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
              />
            )}
          </div>
          <div
            className="problem-component-icon-container"
            onMouseEnter={handleMouseEnterStar}
            onMouseLeave={handleMouseLeaveStar}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: hoveredStar ? "scale(1.1)" : "scale(1)",
              display: "inline-block",
              marginLeft: "1rem",
              marginTop: "0.3rem",
            }}
          >
            {hoveredStar ? (
              <FaStar
                className="problem-component-FaStar"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
                title={showText ? "Add to Favourites" : ""}
              />
            ) : (
              <FaRegStar
                className="problem-component-FaStar"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
              />
            )}
          </div>
          <div
            className="problem-component-icon-container"
            onMouseEnter={handleMouseEnterBookMark}
            onMouseLeave={handleMouseLeaveBookMark}
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: hoveredBookMark ? "scale(1.1)" : "scale(1)",
              display: "inline-block",
              marginLeft: "1rem",
              marginTop: "0.3rem",
            }}
          >
            {hoveredBookMark ? (
              <IoBookmark
                className="problem-component-IoBookmark"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
                title={showText ? "Bookmark" : ""}
              />
            ) : (
              <IoBookmarkOutline
                className="problem-component-IoBookmark"
                //style={{ height: "auto", width: "25px", cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        <div
          className="problem-completion-indicator"
          style={{ color: "black" }}
        >
          Status
          <IoIosArrowDown
            className="problem-component-IoIosArrowDown"
            //style={{ paddingLeft: "5px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

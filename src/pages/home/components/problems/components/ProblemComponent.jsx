import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import GFG from "./styles/GFG.svg";
import { IoNewspaperOutline, IoNewspaper } from "react-icons/io5";
import { MdAddCircleOutline, MdAddCircle } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AddNotes from "../../../../../components/addnotes/AddNotes"; // Import the AddNotes component
import loud_btn from "../../sounds/hover_quest.wav";
import loud_bt2 from "../../sounds/loud_btn_clk.wav";
import { SiGeeksforgeeks } from "react-icons/si";

export default function ProblemComponent({
  problemName,
  difficultyLevel,
  URL,
}) {
  const sound = new Audio(loud_btn);
  const sound2 = new Audio(loud_bt2);

  const navigate = useNavigate();

  const navigateToSolution = () => {
    navigate("/solution");
  };

  const [showText, setShowText] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(false);
  const [hoveredAdd, setHoveredAdd] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(false);
  const [hoveredBookMark, setHoveredBookMark] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Unsolved");
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [isAddNotesVisible, setIsAddNotesVisible] = useState(false); // State for AddNotes visibility

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

  const toggleDropdown = () => {
    sound.play();
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleStatusChange = (status) => {
    sound2.play();
    setSelectedStatus(status);
    setIsDropdownVisible(false);
  };

  const statusColors = {
    Solved: "#50c878",
    Revision: "rgb(221, 221, 57)",
    Unsolved: "rgb(243, 55, 55)",
  };

  let backgroundColor;

  if (difficultyLevel === "Easy") {
    backgroundColor = "#a1e5cd";
  } else if (difficultyLevel === "Medium") {
    backgroundColor = "#FBEDA6";
  } else if (difficultyLevel === "Hard") {
    backgroundColor = "#F3A8A8";
  }

  const mainDivStyle = {
    backgroundColor: backgroundColor,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownMenu = document.querySelector(
        ".problem-component-status-dropdown-menu"
      );
      if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddNotesClick = () => {
    setIsAddNotesVisible(true); // Show the AddNotes component
  };

  const handleAddNotesClose = () => {
    setIsAddNotesVisible(false); // Hide the AddNotes component
  };

  return (
    <>
      <div
        className={`problem-rectangle ${isAddNotesVisible ? "blur" : ""}`}
        style={mainDivStyle}
      >
        <div className="problem-rectangle-group1">
          <h1 className="problem-rectangle-heading">{problemName}</h1>
          <div className="problem-difficulty-indicator">{difficultyLevel}</div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="problemBottom"
        >
          <div className="problem-rectangle-solve-problem-container">
            <a href={URL} target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks className="GFG-logo-problem-solve-rectangle" />
            </a>
          </div>
          <div className="problem-component-icon-outer-container">
            <div
              className="problem-component-icon-container"
              onMouseEnter={handleMouseEnterSolution}
              onMouseLeave={handleMouseLeaveSolution}
              onClick={navigateToSolution}
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
                  className="problem-component-IoNewspaper problem-component-4icon"
                  title={showText ? "Solution" : ""}
                />
              ) : (
                <IoNewspaperOutline className="problem-component-IoNewspaper problem-component-4icon" />
              )}
            </div>
            <div
              className="problem-component-icon-container"
              onMouseEnter={handleMouseEnterAdd}
              onMouseLeave={handleMouseLeaveAdd}
              onClick={handleAddNotesClick}
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
                  className="problem-component-MdAddCircle problem-component-4icon"
                  title={showText ? "Add Notes" : ""}
                />
              ) : (
                <MdAddCircleOutline className="problem-component-MdAddCircle problem-component-4icon" />
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
                  className="problem-component-FaStar problem-component-4icon"
                  title={showText ? "Add to Favourites" : ""}
                />
              ) : (
                <FaRegStar className="problem-component-FaStar problem-component-4icon" />
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
                  className="problem-component-IoBookmark problem-component-4icon"
                  title={showText ? "Bookmark" : ""}
                />
              ) : (
                <IoBookmarkOutline className="problem-component-IoBookmark problem-component-4icon" />
              )}
            </div>
          </div>
          <div
            className="problem-completion-indicator"
            style={{ color: "black" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ color: statusColors[selectedStatus] }}>
                {selectedStatus}
              </span>
              {!isDropdownVisible ? (
                <IoIosArrowDown
                  className="problem-component-IoIosArrowUp"
                  onClick={toggleDropdown}
                />
              ) : (
                <IoIosArrowUp
                  className="problem-component-IoIosArrowDown"
                  onClick={toggleDropdown}
                />
              )}
            </div>
            {isDropdownVisible && (
              <div className="problem-component-status-dropdown-menu">
                <div
                  className="problem-component-status-dropdown-menu-option-1"
                  onClick={() => handleStatusChange("Solved")}
                >
                  Solved
                </div>
                <div
                  className="problem-component-status-dropdown-menu-option-2"
                  onClick={() => handleStatusChange("Revision")}
                >
                  Revision
                </div>
                <div
                  className="problem-component-status-dropdown-menu-option-3"
                  onClick={() => handleStatusChange("Unsolved")}
                >
                  Unsolved
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isAddNotesVisible && (
        <div className="addnotes-modal">
          <AddNotes onClose={handleAddNotesClose} />
        </div>
      )}
    </>
  );
}

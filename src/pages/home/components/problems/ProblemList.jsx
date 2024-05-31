// ProblemsList.jsx
import React, { useEffect, useState } from "react";
import ProblemComponent from "./components/ProblemComponent.jsx";
import "./style.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
export default function ProblemsList() {
  const [problems, setProblems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const problemsPerPage = 10;
  const maxPageNumbersToShow = 5;

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      const response = await fetch(
        "https://dsa-tracker-backend-gvt0.onrender.com/home"
      );
      const data = await response.json();
      setProblems(data.questions); // Assuming 'questions' is the key in your JSON object
    };

    fetchData();
  }, []);

  // Calculate the indices for slicing the problems array
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problems.slice(
    (currentPage-1)*problemsPerPage,
    currentPage*problemsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(problems.length / problemsPerPage);

  // Get the page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const halfRange = Math.floor(maxPageNumbersToShow / 2);
    let start = Math.max(1, currentPage - halfRange);
    let end = Math.min(totalPages, currentPage + halfRange);

    if (currentPage <= halfRange) {
      end = Math.min(totalPages, maxPageNumbersToShow);
    } else if (currentPage + halfRange >= totalPages) {
      start = Math.max(1, totalPages - maxPageNumbersToShow + 1);
    }

    // Ensure we always show first page
    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push("...");
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Ensure we always show last page
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber !== "...") {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {problems.length!==0 && currentProblems.map((problem) => (
        <ProblemComponent
          key={problem._id}
          problemName={problem.Problem}
          difficultyLevel={problem.Difficulty || "Medium"}
          URL={problem.URL}
        />
      ))}
      <div className="DSA-problems-pagination ">
        <button
          className="DSA-problems-pagination-director"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack style={{ fontSize: "1.3rem" }} />
        </button>
        {pageNumbers.map((number, index) => (
          <button
            className="DSA-problems-pagination-button"
            key={index}
            onClick={() => paginate(number)}
            disabled={currentPage === number}
          >
            {number}
          </button>
        ))}
        <button
          className="DSA-problems-pagination-director"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward style={{ fontSize: "1.3rem" }} />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./SolutionPage.css";
import SolutionCode from "./SolutionCode";

export default function SolutionPage({ problemName }) {
  return (
    <div style={{ margin: "2rem" }}>
      <h1 style={{ fontSize: "3rem" }} className="solution-page-problem-name">
        {problemName}
      </h1>

      <h1 className="solution-page-problem-sub-heading">Overview</h1>
      <p className="solution-page-problem-description">
        We are given a grid representing a city layout where some cells contain
        thieves and others are empty, and we need to find the maximum safeness
        factor of all paths from the top-left corner to the bottom-right corner.
        The safeness factor of a path is defined as the minimum Manhattan
        distance from any cell in the path to any thief in the grid.
      </p>
      <h1 className="solution-page-problem-sub-heading">Key Observations:</h1>
      <p className="solution-page-problem-description">
        Manhattan distance between two cells is the sum of the absolute
        differences of their row and column indices. All the cells in the grid
        contain either 0 or 1, representing empty cells and cells containing
        thieves respectively.
      </p>
      <h1 className="solution-page-problem-sub-heading">Approach</h1>
      <h1 className="solution-page-problem-sub-heading">Intuition:</h1>
      <p className="solution-page-problem-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
      <h1 className="solution-page-problem-sub-heading">Algorithm:</h1>
      <p className="solution-page-problem-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
      <h1 className="solution-page-problem-sub-heading">Implementation:</h1>
      <SolutionCode/>
    </div>
  );
}

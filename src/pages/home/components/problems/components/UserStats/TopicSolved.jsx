import React from 'react';
import './TopicSolved.css'

const problemsData = {
  languages: [
    { name: 'Java', problemsSolved: 64 },
    { name: 'C++', problemsSolved: 22 },
  ],
  topics: [
    { name: 'Arrays', count: 12 },
    { name: 'Linked Lists', count: 8 },
    { name: 'Dynamic Programming', count: 8 },
    { name: 'Recursion', count: 18 },
  ],
};

const TopicSolved = () => {

  return (
    <div className="TopicSolvedcontainer">
      <div className="TopicSolvedsection">
        <h3>Languages used</h3>
        {problemsData.languages.map((language, index) => (
          <div key={index} className="TopicSolvedlanguageItem">
            <span className='languageName'>{language.name}</span>
            <span className='NoProblems'>{language.problemsSolved} Problems Solved</span>
          </div>
        ))}
        <div className="TopicShowMore">Show more</div>
        <hr className='TopicsHr'/>
      </div>
      <div className="TopicSolvedsection">
        <h3>Topics Covered</h3>
        {problemsData.topics.map((topic, index) => (
          <div key={index} className="TopicSolvedtopicItem">
            <span className='TopicSolvedName'>{topic.name}</span>
            <span style={{opacity:0.6}} className='TopicSolvedCount'>x {topic.count}</span>
          </div>
        ))}
        <div className="TopicShowMore">Show more</div>
      </div>
    </div>
  );
};

export default TopicSolved;

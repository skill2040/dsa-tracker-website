import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ProblemSolvedChart from '../components/UserStats/ProblemSolvedChart.jsx';
import TopicSolved from '../components/UserStats/TopicSolved.jsx';

const SolutionCode = () => {
    const javaCode = `class Solution{
        // arr: input array
        // n: size of array
        // Function to find the sum of contiguous subarray with maximum sum.
        long maxSubarraySum(int arr[], int n){
            long msf=Integer.MIN_VALUE;
            long meh=0;
            for(int i=0;i<n;i++){
                meh+=arr[i];
                if (meh<arr[i]){
                    meh=arr[i];
                }
                if (msf<meh){
                    msf=meh;
                }
            }
            return msf;
        }
    }`;

    const handleCopy = () => {
        navigator.clipboard.writeText(javaCode);
    };
    const customStyle = {
        ...darcula, // Start with Darcula theme and override specific styles
        'code[class*="language-"]': {
            color: '#44B6A8', // Text color
            fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            fontSize: '1em',
        },
        'pre[class*="language-"]': {
            backgroundColor: '#1e1e1e', // Background color
            padding: '20px',
            borderRadius: '5px',
            overflow: 'auto',
        },
    };  
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', position: 'relative' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <button style={{ backgroundColor: '#44475a', color: '#f8f8f2', border: 'none', padding: '10px 20px', cursor: 'pointer', marginRight: '5px', borderRadius: '5px' }}>C++</button>
                <button style={{ backgroundColor: '#6272a4', color: '#a1f15b', border: 'none', padding: '10px 20px', cursor: 'pointer', marginRight: '5px', borderRadius: '5px' }}>Java</button>
                <button style={{ backgroundColor: '#44475a', color: '#f8f8f2', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}>Python</button>
            </div>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <button style={{ backgroundColor: '#44475a', color: '#f8f8f2', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }} onClick={handleCopy}>Copy</button>
            </div>
            <SyntaxHighlighter language="java" style={customStyle}>
                {javaCode}
            </SyntaxHighlighter>
            <ProblemSolvedChart />
            <TopicSolved />
        </div>
        
    );
};

export default SolutionCode;

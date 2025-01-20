import{H as t}from"./index-881270b8.js";import{P as r}from"./index-a28f56d0.js";import{C as s}from"./index-a1c65322.js";import{D as a,C as m}from"./common-6b40abb2.js";import{n}from"./emotion-styled.browser.esm-9e087f07.js";const u=n.h3``,l=n.p``;function p({title:e,description:i,solution:o}){return t.jsxs(a,{children:[t.jsx(u,{children:e}),t.jsx(l,{children:i}),t.jsx(s,{children:o})]})}const c=n(m)`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px 15px;
`,h=n.h1`
    margin: 0;
    padding: 0;
`,v=()=>t.jsx(r,{title:"Three ways to sum to n",children:t.jsxs(c,{children:[t.jsx(h,{children:"Three unique implementations of the sum_to_n function in JavaScript"}),d.map(({title:e,description:i,solution:o})=>t.jsx(p,{title:e,description:i,solution:o},e))]})}),d=[{title:"1. Iterative Approach",description:"This approach uses a simple for loop to calculate the sum.",solution:`
                var sum_to_n_a = (n) => {
                    let sum = 0;

                    for (let i = 1; i <= n; i++) {
                        sum += i;
                    }

                    return sum;
                };
        `},{title:"2. Mathematical Formula",description:"This implementation uses the arithmetic progression formula.",solution:`
                var sum_to_n_b = (n) => {
                    return (n * (n + 1)) / 2;
                };
        `},{title:"3. Recursive Approach",description:"This uses recursion to compute the summation.",solution:`
                var sum_to_n_c = (n) => {
                    if (n === 1) return 1;
                    return n + sum_to_n(n - 1);
                };
        `}];export{v as default};

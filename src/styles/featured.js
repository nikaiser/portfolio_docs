import { css } from 'emotion';

import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const featured = css`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


  h2 {
    text-align: center;
    font-weight: normal;
    font-size: 50px;
    margin-bottom: 1.5em;
    margin-top: 0;
    border-bottom: 1.5px solid #ccc;
    padding-bottom: 1em;
    max-width: 1000px;
    width: 100%;
  }

  p {
    font-size: 0.7em;
    color: var(--superLightTextColor);
    letter-spacing: 0.1em;
    font-weight: 300;
  }
`;

export default featured;

import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: inline-grid;
  width: 600px;
  height: 600px;
  grid-gap: 10px;
  padding: 10px;
  margin: 10px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: 7px solid grey;
  border-radius: 16px;
  font-size: 14px;

  .first {
    grid-area: 2 / 1 / 7 / 3;
    background-color: #ed4e42;
    border: 5px solid #872b2d;
    border-radius: 10px;
    text-align: center;
  }
  .second {
    grid-area: 1 / 2 / 3 / 9;
    background-color: #6b6fe3;
    border: 5px solid #575ab3;
    border-radius: 10px;
    text-align: center;
  }

  .third {
    grid-area: 4 / 4 / 8 / 7;
    background-color: #db994d;
    border: 5px solid #a37034;
    border-radius: 10px;
    text-align: center;
  }

  .fourth {
    grid-area: 4 / 7 / 6 / 8;
    background-color: #cc81c9;
    border: 5px solid #8f5d8d;
    border-radius: 10px;
    text-align: center;
  }

  .fifth {
    grid-area: 6 / 7 / 8 / 8;
    background-color: #dbda76;
    border: 5px solid #b0af4d;
    border-radius: 10px;
    text-align: center;
  }

  .sixth {
    grid-area: 1 / 1 / 2 / 2;
    background-color: #4bc995;
    border: 5px solid #468f71;
    border-radius: 10px;
    text-align: center;
  }

  .seventh {
    grid-area: 2 / 9 / 11 / 9;
    background-color: #4bc995;
    border: 5px solid #468f71;
    border-radius: 10px;
    text-align: center;
  }

  .eighth {
    grid-area: 9 / 2 / 10 / 11;
    background-color: #a067f5;
    border: 5px solid #7a54b3;
    border-radius: 10px;
    text-align: center;
  }

  .ninth {
    grid-area: 3 / 3 / 9 / 4;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 10fr 1fr 4fr;
    background-color: #2dbccc;
    border: 5px solid #2dbccc;
    border-radius: 10px;
    margin: 5px;
  }

  .nine-one {
    background-color: #90d455;
    border: 3px solid white;
    border-radius: 5px;
  }
  .nine-two {
    background-color: #90d455;
    border: 3px solid white;
    border-radius: 5px;
  }
  .nine-three {
    background-color: #90d455;
    border: 3px solid white;
    border-radius: 5px;
  }

  .header {
    grid-area: 1 / 1 / 3 / 11;
    background-color: #f593d9;
    border: 5px solid #db8fc5;
    border-radius: 10px;
  }

  .footer {
    grid-area: 9 / 1 / 11 / 11;
    background-color: #f593d9;
    border: 5px solid #db8fc5;
    border-radius: 10px;
  }

  .main {
    grid-area: 3 / 3 / 9 / 9;
    background-color: #f593d9;
    border: 5px solid #db8fc5;
    border-radius: 10px;
  }

  .sidebar-left {
    grid-area: 3 / 1 / 9 / 3;
    background-color: #f593d9;
    border: 5px solid #db8fc5;
    border-radius: 10px;
  }

  .sidebar-right {
    grid-area: 3 / 9 / 9 / 11;
    background-color: #f593d9;
    border: 5px solid #db8fc5;
    border-radius: 10px;
  }
`;

const AltGridContainer = styled(GridContainer)`
  background-color: #72548f;
  border-color: #db8fc5;
`;

const VertGridContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 7px solid #378c87;
  border-radius: 8px;
  display: inline-grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 300px;
  height: 600px;
  background-color: #378c87;
  grid-gap: 7px;

  & div {
    border-radius: 5px;
    border: 5px solid #a0ebe7;
    background-color: #a0ebe7;

    &:hover {
      transition-duration: 100ms;
      background-color: black;
      color: white;
      border-color: black;
    }
  }

  .header {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    grid-area: 1 / 1 / 3 / 7;
    font-size: 70px;
  }

  .footer {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    grid-area: 10 / 1 / 11 / 7;
    font-size: 30px;
    letter-spacing: 25px;
  }

  .main {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    grid-area: 3 / 1 / 10 / 6;
    font-size: 70px;
  }

  .sidebar {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    grid-area: 3 / 6 / 10 / 7;
    font-size: 30px;
    letter-spacing: 25px;
    writing-mode: vertical-rl;
  }
`;

const CssPractiseComp = () => {
  return (
    <div
      style={{
        display: 'flex',
        'align-items': 'flex-start',
        'justify-content': 'space-around',
      }}>
      <AltGridContainer>
        <div className="header">HEADER</div>
        <div className="footer">FOOTER</div>
        <div className="sidebar-left">SB-LEFT</div>
        <div className="sidebar-right">SB-RIGHT</div>
        <div className="main">3 (row-start) / 3 (col-start) / 9 (row-end) / 9 (row-end)</div>
      </AltGridContainer>
      <GridContainer>
        <div className="second">
          <strong> grid-area: 1 / 2 / 3 / 9</strong>
        </div>
        <div className="first">2(grs) / 1(gcs) / 7(gre) / 3(gce)</div>
        <div className="third">4 / 4 / 8 / 7</div>
        <div className="fourth">fourth</div>
        <div className="fifth">fifth</div>
        <div className="sixth">sixth</div>
        <div className="seventh">2/9/11/9</div>
        <div className="eighth">9/2/10/11</div>
        <div className="ninth">
          <div className="nine-one"></div>
          <div className="nine-two"></div>
          <div className="nine-three"></div>
        </div>
      </GridContainer>
      <VertGridContainer>
        <div className="header">HEADER</div>
        <div className="footer">FOOTER</div>
        <div className="sidebar">SIDEBAR</div>
        <div className="main">MAIN</div>
      </VertGridContainer>
    </div>
  );
};

export default CssPractiseComp;

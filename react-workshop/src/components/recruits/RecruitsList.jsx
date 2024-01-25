import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recruitGen } from '../../utils/utilFuncs';
import { addRecruits, deleteRecruits } from '../../redux/slices/recruitsSlice';
import { Button } from '../styled/Button.styled';
import styled from 'styled-components';

const RecContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  justify-content: space-between;
  padding: 40px 100px 40px 100px;
`;

const RecruitStyled = styled.div`
  display: inline-grid;
  height: 300px;
  padding: 5px;
  grid-gap: 10px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: #76aba8;
  border: 5px solid #76aba8;
  border-radius: 5px;

  .serial {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 1 / 1 / 7 / 2;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 4px;
    writing-mode: vertical-rl;
    background-color: #8bc9c6;
    border: 5px solid #8bc9c6;
    border-radius: 5px;
  }

  .photo {
    grid-area: 1 / 2 / 7 / 6;
    background-color: #8bc9c6;
    border: 5px solid #8bc9c6;
    border-radius: 5px;
  }

  .data {
    grid-area: 1 / 6 / 7 / 11;
    display: grid;
    padding: 10px 10px 10px 15px;
    grid-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    background-color: #8bc9c6;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;

    .name-block {
      grid-area: 1 / 1 / 2 / 5;
    }
    .sname-block {
      grid-area: 2 / 1 / 3 / 5;
    }
    .age-block {
      display: inline-block;
      grid-area: 3 / 1 / 4 / 5;
    }
    .bg-block {
      grid-area: 5 / 1 / 6 / 5;
    }

    .content {
      font-size: 26px;
      font-weight: normal;
      letter-spacing: 3px;

      background-color: white;
      border: 3px solid white;
      border-radius: 3px;
    }

    .bg-value {
      grid-area: 4 / 3 / 7 / 5;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: 3px dashed #8bc9c6;
      border-radius: 5px;
      font-size: 50px;
      color: #662727;
      padding: 5px 0 10px 5px;
    }
  }
`;

const RecruitsList = () => {
  const recruits = useSelector((state) => state.recruits.recs);
  const dispatch = useDispatch();

  const handleAddRandObj = () => {
    const randAstro = recruitGen();
    dispatch(addRecruits(randAstro));
  };

  const handleClearRecs = () => {
    dispatch(deleteRecruits());
  };

  useEffect(() => {
    console.log('recruits rendered');
  });

  return (
    <div>
      <Button variant="add" onClick={handleAddRandObj}>
        addRandom
      </Button>
      <Button variant="alert" onClick={handleClearRecs}>
        clear
      </Button>
      <br />
      <RecContainer>
        {recruits.map((item) => (
          <RecruitStyled>
            <div className="serial">REM-4271-2290</div>
            <div className="photo"></div>
            <div className="data">
              <div className="name-block">
                <div>first name: </div>
                <div className="content">{item.firstName}</div>
              </div>
              <div className="sname-block">
                <div>last name:</div>
                <div className="content">{item.lastName}</div>
              </div>
              <div className="age-block">
                <div>age:</div>
                <div className="content"> {item.age}</div>
              </div>

              <div className="bg-block">blood group:</div>
              <div className="bg-value">{item.bloodGroup}</div>
            </div>
          </RecruitStyled>
        ))}
      </RecContainer>
    </div>
  );
};

export default RecruitsList;

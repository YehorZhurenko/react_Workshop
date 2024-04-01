import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlanet, delPlanets, fetchPlanets, planetsCount } from '../../redux/slices/planetsSlice';
import { planetGen } from '../../utils/utilFuncs';
import Planet from './Planet';
import styled from 'styled-components';

const PlanetsContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: black;

  .container__body {
    display: block;
    width: 50%;
  }
`;

export const Planets = () => {
  const [searchVal, setSearchVal] = useState('');
  const inpRef = useRef(null);
  const dispatch = useDispatch();

  const { planets, status, error } = useSelector((state) => state.planets);

  // Handlers

  const handleAddPlanet = async () => {
    const randPlanet = planetGen();
    dispatch(addPlanet(randPlanet));
  };

  const handleSetSearch = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    console.log('planets rendered');
    dispatch(fetchPlanets());
    inpRef.current.focus();
  }, [dispatch]);

  // Search

  const foundPlanets = !searchVal
    ? planets
    : planets.filter((val) => val.name.toLowerCase().includes(searchVal.toLowerCase()));

  return (
    <div>
      <button onClick={handleAddPlanet}>add planet</button>
      <button
        onClick={() => {
          console.log(planets.length);
        }}>
        log planet length
      </button>
      <input
        ref={inpRef}
        type="text"
        value={searchVal}
        onChange={(e) => {
          handleSetSearch(e);
        }}
        placeholder="find planet by name"
      />
      <button
        onClick={() => {
          setSearchVal('');
        }}>
        del
      </button>
      <br />
      🌑 x {planets.length}
      <br />
      {status === 'error' && <div>{error}</div>}
      <PlanetsContainer>
        <div className="container__body">
          {foundPlanets.map((planet) => (
            <Planet key={planet.id} {...planet} />
          ))}
        </div>
      </PlanetsContainer>
    </div>
  );
};

export default Planets;

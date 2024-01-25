import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlanet, fetchPlanets } from '../../redux/slices/planetsSlice';
import { planetGen } from '../../utils/utilFuncs';
import Planet from './Planet';

const Planets = () => {
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
    console.log('planets rerndered');
    dispatch(fetchPlanets());
    console.log(inpRef);
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
      Planets count: {planets.length}
      <br />
      {status === 'pending' && <div>loading planets...</div>}
      {status === 'error' && <div>{error}</div>}
      {foundPlanets.map((planet) => (
        <Planet key={planet.id} {...planet} />
      ))}
    </div>
  );
};

export default Planets;

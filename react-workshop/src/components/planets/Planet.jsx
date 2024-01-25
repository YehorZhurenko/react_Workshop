import { useDispatch, useSelector } from 'react-redux';
import { deletePlanet, togglePlanet, updatePlanet } from '../../redux/slices/planetsSlice';
import { useState } from 'react';
import styles from '../../styles/Planet.module.css';

const Planet = ({ id, name, climate, size }) => {
  const [togglePlanet, setTogglePlanet] = useState(false);
  const [planetName, setPlanetName] = useState(name);
  const dispatch = useDispatch();

  const handleDeletePlanet = (id) => {
    dispatch(deletePlanet(id));
  };

  const handleTogglePlanet = (id) => {
    setTogglePlanet(!togglePlanet);
  };

  const handleChangeName = (e) => {
    setPlanetName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updatePlanet({ id, planetName }));
  };

  return (
    <div className={styles.container}>
      <div className="item"> {id}</div>
      <div className="item">
        {' '}
        {togglePlanet ? (
          <>
            <input
              type="text"
              value={planetName}
              onChange={(e) => {
                handleChangeName(e);
              }}
            />
          </>
        ) : (
          <b>{planetName}</b>
        )}
      </div>
      <div className="item"> {climate}</div>
      <div className="item"> {size}</div>
      <div className="item">
        <button onClick={() => handleDeletePlanet(id)}>del</button>
        {togglePlanet ? (
          <button
            onClick={() => {
              setTogglePlanet(false);
              handleSubmit();
            }}>
            done
          </button>
        ) : (
          <button onClick={handleTogglePlanet}>edit</button>
        )}
      </div>
    </div>
  );
};

export default Planet;

import { useDispatch } from 'react-redux';
import { deletePlanet, updatePlanet } from '../../redux/slices/planetsSlice';
import { useRef, useState } from 'react';
import styles from '../../styles/Planet.module.css';
import styled from 'styled-components';

const Button = styled.button`
  appearance: button;
  border: none;
  background: transparent;
  width: 30px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  border-radius: 3px;
  background: transparent;
  text-alignment: center;
  text-align: center;

  &:focus {
    outline: none;
    background-color: white;
  }
`;

const Planet = ({ id, name, climate, size }) => {
  const [togglePlanet, setTogglePlanet] = useState(false);
  const [planetName, setPlanetName] = useState(name);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleDeletePlanet = (id) => {
    dispatch(deletePlanet(id));
  };

  const handleTogglePlanet = async (id) => {
    await setTogglePlanet(!togglePlanet);
    inputRef.current.focus();
  };

  const handleChangeName = (e) => {
    setPlanetName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updatePlanet({ id, planetName }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.number}>{id}</div>
      <div>
        {' '}
        {togglePlanet ? (
          <Input
            type="text"
            ref={inputRef}
            value={planetName}
            onChange={(e) => {
              handleChangeName(e);
            }}
          />
        ) : (
          <b>{planetName}</b>
        )}
      </div>
      <div> {climate}</div>
      <div className={styles.size}> {size}</div>
      <div className={styles.buttons}>
        <Button onClick={() => handleDeletePlanet(id)}>✖</Button>
        {togglePlanet ? (
          <Button
            onClick={() => {
              setTogglePlanet(false);
              handleSubmit();
            }}>
            ✔
          </Button>
        ) : (
          <Button onClick={handleTogglePlanet}>✎</Button>
        )}
      </div>
    </div>
  );
};

export default Planet;

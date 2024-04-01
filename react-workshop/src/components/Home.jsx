import { useSelector, useDispatch } from 'react-redux';
import { deleteAstronauts } from '../redux/slices/astronautsSlice';
import { deleteRecruits } from '../redux/slices/recruitsSlice';

import { Button } from './styled/Button.styled';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Home = () => {
  const astronauts = useSelector((state) => state.astronauts.ready);
  const recruits = useSelector((state) => state.recruits.recs);
  const dispatch = useDispatch();

  const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
  `;

  const handleLog = () => {
    console.log('recruits: ', recruits, '\nastros', astronauts);
  };

  return (
    <div>
      <StyledNav>
        <Link to="astronauts">astros</Link>
        <Link to="recruits">recs</Link>
        <Link to="planets">planets</Link>
        <Link to="css-practise">css</Link>
        <Link to="taming-hooks">useState</Link>
        <Link to="taming-hooks/taming-use-memo">useMemo</Link>
        <Link to="taming-hooks/taming-use-callback">useCallback</Link>
        <Link to="taming-hooks/taming-use-reducer">useReducer</Link>
      </StyledNav>
      <Button onClick={handleLog}>LOG</Button>
      <Button
        variant="alert"
        onClick={() => {
          dispatch(deleteRecruits());
          dispatch(deleteAstronauts());
        }}>
        CLEAR ALL
      </Button>

      <div className="count">recs count: {recruits.length}</div>
      <div className="count">astros count: {astronauts.length}</div>
      <Outlet />
      <br />
    </div>
  );
};

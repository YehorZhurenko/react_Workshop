import { useSelector, useDispatch } from 'react-redux';
import { deleteAstronauts } from '../redux/slices/astronautsSlice';
import { deleteRecruits } from '../redux/slices/recruitsSlice';

import { Button } from './styled/Button.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const astronauts = useSelector((state) => state.astronauts.ready);
  const recruits = useSelector((state) => state.recruits.recs);
  const dispatch = useDispatch();

  //  push random recruit

  //  recruits to astros

  const handleLog = () => {
    console.log('recruits: ', recruits, '\nastros', astronauts);
  };

  return (
    <div>
      <div className="nav">
        <Link to="astronauts">astros </Link>
        <Link to="recruits">recs </Link>
        <Link to="planets">planets </Link>
        <Link to="css-practise">css </Link>
      </div>
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
      <br />
    </div>
  );
};

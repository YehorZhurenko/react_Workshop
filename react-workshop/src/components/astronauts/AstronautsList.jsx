import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAstronauts, deleteAstronauts } from '../../redux/slices/astronautsSlice';
import { trainRecruits, astroAutoEquip } from '../../utils/utilFuncs';

const AstronautsList = () => {
  const recruits = useSelector((state) => state.recruits.recs);
  const astronauts = useSelector((state) => state.astronauts.ready);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('astros rendered');
  });

  const handleRecsToAstros = () => {
    const astros = trainRecruits(recruits);
    dispatch(addAstronauts(astros));
  };

  const handleEquip = () => {
    const ready = astroAutoEquip(astronauts);
    dispatch(deleteAstronauts());
    dispatch(addAstronauts(ready));
  };

  return (
    <div className="">
      <button onClick={handleRecsToAstros}>recruits → astros</button>
      <button onClick={handleEquip}>equipped astros</button>

      {astronauts.map((item) => (
        <div className="astronautItem">
          {item.firstName} " <b>{item.codeName}</b> " {item.lastName} {item.age} y.o., blood group:
          <b>{item.bloodGroup}</b>
          spec: {item.spec}
        </div>
      ))}
    </div>
  );
};

export default AstronautsList;

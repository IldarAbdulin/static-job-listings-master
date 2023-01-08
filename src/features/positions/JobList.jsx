import { JobPosition } from './JobPosition';
import { addFilter } from 'features/filter/filter-slice';
import { usePositions } from './use-positions';
import { useFetchPosiotions } from './use-fetch-positions';
import { useDispatch } from 'react-redux';

export const JobList = () => {
  const dispatch = useDispatch();
  useFetchPosiotions();
  const positions = usePositions();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

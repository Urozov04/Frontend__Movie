import { memo } from 'react';
import Lorem from './components/Lorem';

const Antd = () => {
  return (
    <div className="Index">
      <h2>Antd</h2>
      <Lorem/>
    </div>
  );
};

export default memo(Antd);
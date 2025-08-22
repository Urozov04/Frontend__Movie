import { memo } from 'react';
import { useMovie } from '../movie/services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';

const Home = () => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  return (
    <div className="">
      {/* <Hero data={data?.results?.slice(0,5)}/> */}
      <MovieView data={data?.results?.slice(0,8)}/>
    </div>
  );
};

export default memo(Home);
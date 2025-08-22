import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../const';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: any
}

const MovieView:FC<Props> = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {
                data?.map((movie:any) => (
                    <div key={movie.id} className=''>
                        <div onClick={()=> navigate(`/movie/${movie.id}`)}>
                            <img loading='lazy' src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <div className='p-2'>
                            <h3 className='font-bold text-xl line-clamp-1 dark:text-white' title={movie.title}>{movie.title}</h3>
                            <p className='dark:text-white' >⭐ {movie.vote_average}</p>
                            <p className='dark:text-white'>{movie.release_date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default memo(MovieView);
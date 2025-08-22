import { Input } from 'antd';
import { memo, useEffect, type ChangeEvent } from 'react';
import { useSearch } from './services/useSearch';
import MovieView from '../../shared/components/movie-view/MovieView';
import { useDebounce } from '../../shared/hooks/useDebounce';
import { useParamsHook } from '../../shared/hooks/useParams';

const Search = () => {
  const {getParam, setParam, removeParam} = useParamsHook()

  // const [value, setValue] = useState("")
  const value = getParam("search") || ""
  const {getMoviesBySearch} = useSearch()
  const debouncedValue = useDebounce(value, 1000)
  
  const {data} = getMoviesBySearch({query: debouncedValue})

  useEffect(() => {
    if (debouncedValue) {
      setParam("search", debouncedValue);
    } else {
      removeParam("search");
    }
  }, [])

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const v = e.target.value
    if(v){
      setParam("search", v)
    }else{
      removeParam("search")
    }
  }
  return (
    <div className="container">
      <Input value={value} onChange={handleChange} placeholder='search...'/>
      <div className='mt-6'>
        <MovieView data={data?.results}/>
      </div>
    </div>
  );
};

export default memo(Search);
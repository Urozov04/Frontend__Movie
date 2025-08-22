import { memo } from "react";
import { useParams } from "react-router-dom";
import { usePerson } from "./services/usePerson";
import { IMAGE_URL } from "../../shared/const";
import { Image } from "antd";
import MovieView from "../../shared/components/movie-view/MovieView";

const Person = () => {
  const { id } = useParams();
  const { getPersonById, getPersonItems } = usePerson();
  const { data } = getPersonById(id || "");
  const {data: imageData} = getPersonItems(id || "", "images")
  const {data: movieData} = getPersonItems(id || "", "movie_credits")

  console.log(movieData?.cast);
  

  return (
    <div className="container">
      <div className="grid md:grid-cols-2">
        <div >
          <img className="sticky top-0 " src={IMAGE_URL + data?.profile_path} width={400} alt="" />
        </div>
        <div>
        <div className="sticky top-0 ">
              <h1 className="text-2xl">{data?.name}</h1>
          <strong>{data?.birthday}</strong>
          <p className="">{data?.biography}</p>
        </div>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        {
          imageData?.profiles?.map((item:any, index:number) => (
            <Image key={index} src={IMAGE_URL + item.file_path} className="min-w-[150px]"/>
          ))
        }
      </div>
      <div>
        <MovieView data={movieData?.cast}/>
      </div>
    </div>
  );
};

export default memo(Person);

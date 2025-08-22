import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMAGE_URL } from "../../../../shared/const";
import { useMovieDetail } from "../../services/useMovieDetail";

const Crew = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();
  const { data: creditsData } = getMovieItems(id || "", "credits");
  const navigate = useNavigate();
  return (
    <div className="flex gap-[20px] overflow-auto mt-[20px] actors">
      {creditsData?.crew?.map((user: any) => (
        <div
          key={user.id}
          className="flex-shrink-0 w-[100px] text-center cursor-pointer"
          onClick={() => navigate(`/actor/${user.id}`)}
        >
          <div>
            <img
              src={
                user.profile_path
                  ? IMAGE_URL + user.profile_path
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
              }
              width={100}
              height={150}
              className={`h-[150px] w-[100px] object-cover rounded-full mx-auto ${
                !user.profile_path ? "fill-black bg-[white]" : ""
              }`}
              alt={user.name}
              loading="lazy"
            />
          </div>

          <div className="mt-2">
            <h3
              title={user.name}
              className="line-clamp-1 text-sm font-medium dark:text-[#A1A1A1]"
            >
              {user.name}
            </h3>
            <p
              title={user.character}
              className="line-clamp-1 text-xs text-gray-500"
            >
              {user.character}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Crew);

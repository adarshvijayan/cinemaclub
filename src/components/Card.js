
import { Link } from "react-router-dom";
export const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/movie/${id}`}>
            <img className="rounded-t-lg" src={image} alt="" />
          </Link>
          <div>
            <Link to={`/movie/${id}`}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{overview}</p>
           
          </div>
      </div>

  )
}

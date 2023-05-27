import Image from "next/image";
import { ThumbUpIcon, } from "@heroicons/react/outline";
import { forwardRef } from "react";

const ThumbNail = forwardRef(({ ...restProps }, ref) => {

  const BASE_PATH = 'https://image.tmdb.org/t/p/original/'

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        responsive
        width={1920}
        height={1080}
        src={`${BASE_PATH}${restProps.backdrop_path || restProps.poster_path}` || `${BASE_PATH}${restProps.poster_path}`}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{restProps.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{restProps.title || restProps.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {restProps.media_type && `${restProps.media_type} •`}{' '}
          {restProps.release_date || restProps.first_air_date} •{' '}
          <ThumbUpIcon className='h-5 mx-2' /> {restProps.vote_count}
        </p>
      </div>
    </div>
  )
})

export default ThumbNail
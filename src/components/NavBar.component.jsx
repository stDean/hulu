import { useRouter } from "next/router";

import request from "@/utils/request";

const NavBar = () => {

  const router = useRouter();

  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {
          /**
           * Object.entries turns the object into an array containing an array of the key value pair e.g [[key, value]];
           */
          Object.entries(request).map(([key, { title }]) => (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-500 last:pr-24"
            >
              {title}
            </h2>
          ))
        }
      </div>

      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12' />
    </nav>
  )
}

export default NavBar
import FlipMove from "react-flip-move";

import ThumbNail from "./ThumbNail.component";

const Result = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {
        results.map(({ id, ...restProps }) => (
          <ThumbNail key={id} {...restProps} />
        ))
      }
    </FlipMove>
  )
}

export default Result
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] flex items-center py-2 px-2">
      <button className="btn btn-secondary btn-sm">Latest</button>
      <Marquee pauseOnHover={true}>
        <Link to="" className="mr-5">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="" className="mr-5">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="" className="mr-5">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

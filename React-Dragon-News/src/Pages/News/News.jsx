import Header from "../Shared/Header/Header";
import RightSideBar from "../Shared/RightSideBar.jsx/RightSideBar";

const News = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4">
        <h1 className="col-span-3">News details</h1>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default News;

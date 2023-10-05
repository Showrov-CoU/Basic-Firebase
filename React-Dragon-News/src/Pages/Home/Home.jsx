import Header from "../Shared/Header/Header";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideBar from "../Shared/RightSideBar.jsx/RightSideBar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="md:col-span-2 border-2">
          <h2>News comming soon...</h2>
        </div>
        <div>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Home;

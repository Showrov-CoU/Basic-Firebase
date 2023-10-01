import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div
      style={{
        height: "100",
        width: "100",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

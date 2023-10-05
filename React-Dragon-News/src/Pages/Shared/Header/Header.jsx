import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center pb-4 pt-6 space-y-1">
      <img className="mx-auto text-base" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl font-semibold">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;

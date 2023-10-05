import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div>
      <div className="space-y-2 mb-8">
        <h1 className="text-2xl mb-2 font-bold">Login with</h1>
        <button className="btn w-full capitalize btn-sm btn-outline">
          <FcGoogle></FcGoogle> Login with Google
        </button>
        <button className="btn w-full capitalize btn-sm btn-outline">
          <BsGithub></BsGithub>Login with Github
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl mb-2 font-bold">Find us on</h1>
        <a
          href=""
          className="flex items-center gap-2 border-2 rounded-t-md py-3 px-5"
        >
          <BsFacebook></BsFacebook>
          <span>Facebook</span>
        </a>
        <a href="" className="flex items-center gap-2 border-x-2 py-3 px-5">
          <BsTwitter></BsTwitter>
          <span>Twitter</span>
        </a>
        <a
          href=""
          className="flex items-center gap-2 border-2 rounded-b-md py-3 px-5"
        >
          <BsInstagram></BsInstagram>
          <span>Instagram</span>
        </a>
      </div>

      <div className="space-y-2 mb-8 bg-[#F3F3F3] p-4">
        <h1 className="text-2xl mb-2 font-bold">Q-ZOne</h1>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideBar;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUpLogin = () => {
  const navigate = useNavigate();

  const onRegisterTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLogosfacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onDevicongoogleClick = useCallback(() => {
    window.open(
      "https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&osid=1&passive=1209600&service=mail&ifkv=AVQVeyx0bNN9E8Cc7zYT8X0-xZkWPJ__b3dcqAmA5N7ncDrv19S6R0lU6KDAWCSdY5sM93yTV216&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    );
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1082px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[0px] left-[371px] w-[694px] h-[1080px]">
        <div className="absolute top-[0px] left-[0px] bg-darkgray w-[694px] h-[1080px]" />
        <div className="absolute top-[891px] left-[205px] leading-[100%] inline-block w-[157.1px]">
          New here ?
        </div>
        <div
          className="absolute top-[891px] left-[353px] leading-[100%] text-blue inline-block w-[115.4px] cursor-pointer"
          onClick={onRegisterTextClick}
        >
          Register
        </div>
        <div className="absolute top-[841px] left-[346.4px] leading-[100%] text-firebrick inline-block w-[143.6px]">
          Click Here
        </div>
        <div className="absolute top-[597px] left-[308.4px] text-[40px] leading-[100%] font-thin inline-block w-[52.8px]">
          Or
        </div>
        <div className="absolute top-[646px] left-[288px] text-11xl leading-[100%] font-thin inline-block w-[112.9px]">{`Sign in `}</div>
        <div className="absolute top-[685px] left-[290px] text-11xl leading-[100%] font-thin inline-block w-[97px]">
          Using
        </div>
        <div className="absolute top-[975px] left-[55.5px] text-xl leading-[100%] inline-block w-[254.1px]">
          Terms and Conditions
        </div>
        <div className="absolute top-[972px] left-[418.8px] text-xl leading-[100%] inline-block w-[160.8px]">
          Privacy policy
        </div>
        <div className="absolute top-[323px] left-[18.7px] text-xl leading-[100%] inline-block w-[119.1px]">
          Username
        </div>
        <div className="absolute top-[386px] left-[24.8px] text-xl leading-[100%] inline-block w-[114.2px]">
          Password
        </div>
        <b className="absolute top-[114px] left-[223px] text-31xl [text-decoration:underline] leading-[100%] inline-block w-[315.5px]">
          WELCOME
        </b>
        <input
          className="[border:none] bg-gainsboro absolute top-[311px] left-[153.7px] w-[479.9px] h-11"
          type="text"
        />
        <input
          className="[border:none] bg-gainsboro absolute top-[381px] left-[153.7px] w-[479.9px] h-11"
          type="password"
        />
        <div className="absolute top-[463px] left-[344px] w-[235.7px] flex flex-row items-center justify-start gap-[9px]">
          <input
            className="cursor-pointer relative bg-gainsboro box-border w-[18px] h-[18px] border-[0.5px] border-solid border-black"
            type="checkbox"
          />
          <div className="relative leading-[100%]">Remember me</div>
        </div>
        <div className="absolute top-[841px] left-[123px] leading-[100%] inline-block w-[257.8px]">
          Forgot password ?
        </div>
        <img
          className="absolute top-[747px] left-[352px] w-[35px] h-[35px] overflow-hidden object-cover cursor-pointer"
          alt=""
          src="/undefined6.png"
          onClick={onLogosfacebookIconClick}
        />
        <a
          className="[text-decoration:none] absolute top-[746px] left-[273px] w-[35px] h-[35px] overflow-hidden cursor-pointer"
          onClick={onDevicongoogleClick}
        >
          <img
            className="absolute h-[98.86%] w-[96.86%] top-[0.57%] right-[1.43%] bottom-[0.57%] left-[1.71%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined7.png"
          />
          <img
            className="absolute h-[39.71%] w-[77.14%] top-[0.57%] right-[16%] bottom-[59.71%] left-[6.86%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined8.png"
          />
          <img
            className="absolute h-[44.29%] w-[21.43%] top-[27.71%] right-[76.86%] bottom-[28%] left-[1.71%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined9.png"
          />
          <img
            className="absolute h-[46.86%] w-[47.43%] top-[40.86%] right-[1.71%] bottom-[12.29%] left-[50.86%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined10.png"
          />
          <img
            className="absolute h-[39.71%] w-[76.86%] top-[59.71%] right-[16.29%] bottom-[0.57%] left-[6.86%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/undefined11.png"
          />
        </a>
        <div
          className="absolute top-[541px] left-[254.4px] w-[178px] h-11 cursor-pointer text-[17.05px]"
          onClick={onGroupContainer1Click}
        >
          <div
            className="absolute top-[0px] left-[0px] w-[178px] h-11 cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50px] bg-mediumslateblue w-[178px] h-11" />
            <div className="absolute top-[13px] left-[58.9px] leading-[100%] inline-block w-[55.2px]">
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;

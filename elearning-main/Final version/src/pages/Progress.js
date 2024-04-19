import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  const onCOURSESTextClick = useCallback(() => {
    navigate("/courses-page");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-base-7 text-black font-inter">
      <div className="absolute top-[54.8px] left-[164.5px] w-[752.6px] h-[59.7px]">
        <div className="absolute top-[2.2px] left-[519.5px] bg-gainsboro w-[98.9px] h-[37.2px]" />
        <div
          className="absolute top-[12.7px] left-[76.4px] leading-[100%] inline-block w-[116.5px] h-[47px] cursor-pointer"
          onClick={onHomeTextClick}
        >
          HOME
        </div>
        <div
          className="absolute top-[12.7px] left-[177.4px] leading-[100%] inline-block w-[168.4px] h-[47px] cursor-pointer"
          onClick={onCOURSESTextClick}
        >
          COURSES
        </div>
        <div className="absolute top-[11.8px] left-[279.2px] leading-[100%] inline-block w-[182.1px] h-[47px]">
          ABOUT US
        </div>
        <div className="absolute top-[11.8px] left-[392.9px] leading-[100%] inline-block w-[228.1px] h-[47px]">
          CONTACT US
        </div>
        <div className="absolute top-[12.2px] left-[524.5px] leading-[100%] inline-block w-[228.1px] h-[47px]">
          PROGRESS
        </div>
        <section className="absolute top-[0px] left-[0px] w-[45px] h-[42.1px] overflow-hidden">
          <img
            className="absolute h-[83.37%] w-[83.33%] top-[8.31%] right-[8.22%] bottom-[8.31%] left-[8.44%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/menu.png"
          />
        </section>
      </div>
      <div className="absolute top-[65.6px] left-[1022.6px] text-[19.28px] leading-[100%] inline-block w-[143.9px] h-[31.3px]">
        Welcome
      </div>
      <div className="absolute top-[48px] left-[1171.6px] bg-gainsboro w-[165.5px] h-[49px]" />
      <div className="absolute top-[933px] left-[-0.1px] w-[1645px] h-[467px] text-12xl-1">
        <div className="absolute top-[0px] left-[0px] w-[1645px] h-[467px]">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1645px] h-[467px]" />
          <b className="absolute top-[135px] left-[477px] leading-[100%] inline-block w-[80.2px] h-[50.3px]">
            Read
          </b>
          <b className="absolute top-[135px] left-[727.1px] leading-[100%] inline-block w-[90.7px] h-[50.3px]">
            Learn
          </b>
          <b className="absolute top-[135px] left-[952.5px] leading-[100%] inline-block w-[87.8px] h-[50.3px]">
            Enjoy
          </b>
          <div className="absolute top-[42.7px] left-[517px] text-26xl leading-[100%] inline-block w-[593px] h-[67px]">
            Trusted by Educators
          </div>
        </div>
        <div className="absolute top-[367.7px] left-[345px] w-[745px] h-[25px] text-6xl">
          <div className="absolute top-[0px] left-[0px] leading-[100%]">
            TERMS AND CONDITIONS
          </div>
          <div className="absolute top-[0px] left-[343px] leading-[100%]">
            PRIVACY POLICY
          </div>
          <div className="absolute top-[0px] left-[594px] leading-[100%]">
            DISCLAIMER
          </div>
        </div>
      </div>
      <div className="absolute top-[568px] left-[797px] bg-gainsboro w-[419px] h-[298px]" />
      <b className="absolute top-[164px] left-[699px] text-11xl leading-[100%] inline-block w-[197px] h-[42px]">
        PROGRESS
      </b>
      <div className="absolute top-[255px] left-[374px] bg-gainsboro w-[847px] h-56" />
      <div className="absolute top-[568px] left-[382px] bg-gainsboro w-[375px] h-[303px]" />
    </div>
  );
};

export default Progress;

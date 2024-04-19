import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  const onCOURSESTextClick = useCallback(() => {
    navigate("/sign-uplogin");
  }, [navigate]);


  const onGroupContainer4Click = useCallback(() => {
    navigate("/quiz-page");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/level-topics");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-[17.05px] text-black font-inter">
      <div className="absolute top-[54.8px] left-[164.5px] w-[752.6px] h-[59.7px] text-base-7">
        <div className="absolute top-[2.9px] left-[166.9px] bg-gainsboro w-[98.9px] h-[37.2px]" />
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
      <div className="absolute top-[275px] left-[440px] bg-gainsboro w-[750px] h-[493px]" />
      <div className="absolute top-[280px] left-[455px]">
      <p>Q1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the smallest unit of matter</p>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Answer : atom &nbsp;&nbsp;&nbsp;&nbsp; Expected Answer : ATOM</p>
      <p>Q2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What gas do plants absorb during photosynthesis?</p> 
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Answer : co2 &nbsp;&nbsp;&nbsp;&nbsp; Expected Answer : CO2</p>
      <p>Q3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the force that pulls objects towards the center of the Earth?</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Answer : gravity &nbsp;&nbsp;&nbsp;&nbsp; Expected Answer : GRAVITY</p>
    
      <p>Q4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the process by which a liquid turns into a gas at the surface of the liquid?</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Answer : evaporation &nbsp;&nbsp;&nbsp;&nbsp; Expected Answer : EVAPORATION</p>
      
      <p>Q5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the main component of Earth's atmosphere?</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Answer : nitrogen &nbsp;&nbsp;&nbsp;&nbsp; Expected Answer : NITROGEN</p>
      
      </div>
      <div
        className="absolute top-[804px] left-[603px] w-[84px] h-11 cursor-pointer"
        onClick={onGroupContainer4Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-51xl bg-darksalmon-100 w-[84px] h-11" />      
        <b className="absolute top-[12px] left-[13px] leading-[100%] inline-block w-16 h-[15px]">
          Retake
        </b>
      </div>
      <div
        className="absolute top-[804px] left-[813px] w-[84px] h-11 cursor-pointer"
        onClick={onGroupContainer5Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-51xl bg-darksalmon-100 w-[84px] h-11" />
        <b className="absolute top-[6px] left-[20px] leading-[100%] inline-block w-16 h-[15px]">
          Next Topic
        </b>
      </div>
      <b className="absolute top-[209px] left-[674px] text-11xl leading-[100%]">
        RESULTS
      </b>
    </div>
  );
};

export default Results;

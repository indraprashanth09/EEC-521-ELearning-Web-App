import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const StudentsProgress = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/teacher-homepage");
  }, [navigate]);

  const onHomeButtonClick = useCallback(() => {
    navigate("/teacher-homepage");
  }, [navigate]);

  const onModifyButtonClick = useCallback(() => {
    navigate("/modify");
  }, [navigate]);

  onModifyButtonClick

  return (
    <div className="relative bg-white w-full h-[1100px] overflow-hidden text-left text-[22.43px] text-black font-inter">
      <div className="absolute top-[192px] left-[456px] bg-gainsboro w-[980px] h-[388px]" />
      <img
        className="absolute top-[0px] left-[0px] w-4 h-4 overflow-hidden object-cover"
        alt=""
        src="/undefined.png"
      />
      <div className="absolute top-[2562px] left-[96px] bg-gainsboro w-[1723px] h-[631.8px]" />
      <b className="absolute top-[2711px] left-[616px] text-15xl-1 leading-[100%]">
        Read
      </b>
      <b className="absolute top-[2711px] left-[903px] text-15xl-1 leading-[100%]">
        Learn
      </b>
      <b className="absolute top-[2711px] left-[1184px] text-15xl-1 leading-[100%]">
        Enjoy
      </b>
      <div className="absolute top-[2611px] left-[729px] text-26xl leading-[100%]">
        Trusted by Educators
      </div>
      <div className="absolute top-[2744.6px] left-[1523.3px] leading-[100%]">
        Privacy policy
      </div>
      <a className="[text-decoration:none] absolute top-[2800.2px] left-[1523.3px] leading-[100%] text-[inherit]">
        Disclaimer
      </a>
      <div className="absolute top-[2855.9px] left-[1523.3px] leading-[100%]">
        Disclaimer
      </div>
      <div className="absolute top-[2911.5px] left-[1523.3px] leading-[100%]">
        Feedback and Help
      </div>
      <div className="absolute top-[652px] left-[99px] bg-gainsboro w-[1723px] h-[631.8px]" />
      <b className="absolute top-[801px] left-[619px] text-15xl-1 leading-[100%]">
        Read
      </b>
      <b className="absolute top-[801px] left-[906px] text-15xl-1 leading-[100%]">
        Learn
      </b>
      <b className="absolute top-[801px] left-[1187px] text-15xl-1 leading-[100%]">
        Enjoy
      </b>
      <div className="absolute top-[701px] left-[732px] text-26xl leading-[100%]">
        Trusted by Educators
      </div>
      <div className="absolute top-[834.6px] left-[1526.3px] leading-[100%]">
        Privacy policy
      </div>
      <a className="[text-decoration:none] absolute top-[890.2px] left-[1526.3px] leading-[100%] text-[inherit]">
        Disclaimer
      </a>
      <div className="absolute top-[945.9px] left-[1526.3px] leading-[100%]">
        Disclaimer
      </div>
      <div className="absolute top-[1001.5px] left-[1526.3px] leading-[100%]">
        Feedback and Help
      </div>
      <div
        className="absolute top-[75.1px] left-[456.4px] text-[17.05px] leading-[100%] inline-block w-[99.6px] h-[43.1px] cursor-pointer"
        onClick={onHomeTextClick}
      >
        HOME
      </div>
      <div className="absolute top-[74px] left-[547px] text-[17.05px] leading-[100%] inline-block w-[156.1px] h-[43.1px]">
        ABOUT US
      </div>
      <div className="absolute top-[74px] left-[661px] text-[17.05px] leading-[100%] inline-block w-[195.6px] h-[43.1px]">
        CONTACT US
      </div>
      <div className="absolute top-[75px] left-[1134px] text-[19.69px] leading-[100%] inline-block w-[134.1px] h-[29.5px]">
        Welcome
      </div>
      <div className="absolute top-[59px] left-[1268px] bg-gainsboro w-[153.8px] h-[45.5px]" >
        <p style={{fontSize:"15px"}}><center>Indra Prashanth</center></p>
        </div>
      <img
        className="absolute h-[1.82%] w-[1.3%] top-[6.82%] right-[78.44%] bottom-[91.36%] left-[20.26%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined1.png"
      />
      <div className="absolute top-[355px] left-[684px] text-[35.85px] leading-[100%] inline-block w-[469px] h-[22px]">
        DATA INSERTED/UPDATED
      </div>
      <div className="absolute top-[470px] left-[696px] w-[114px] h-[30px] text-[15.85px]">
      <button className="cursor-pointer [border:none]">
        <div className="absolute top-[0px] left-[0px] rounded-51xl bg-cornflowerblue w-[114px] h-[30px]"  onClick={onModifyButtonClick}/>
        <div className="absolute top-[8px] left-[28px] leading-[100%]">
          MODIFY
        </div>
        </button>
      </div>
      <div className="absolute top-[470px] left-[989px] w-[114px] h-[30px] text-[15.85px]">
        <button className="cursor-pointer [border:none]">
        <div className="absolute top-[0px] left-[0px] rounded-51xl bg-red w-[114px] h-[30px]" onClick={onHomeButtonClick}/>
        <div className="absolute top-[8px] left-[28px] leading-[100%]">
          HOME
        </div>
        </button>
        
      </div>
    </div>
  );
};

export default StudentsProgress;

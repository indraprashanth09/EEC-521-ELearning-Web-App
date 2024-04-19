import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const TeachersLogin = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/teacher-homepage");
  }, [navigate]);   

  return (
    <div className="relative bg-white w-full h-[1100px] overflow-hidden text-left text-[22.43px] text-black font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-4 h-4 overflow-hidden"
        alt=""
        src="/pajamasscrolldown.svg"
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
      
      <a className="[text-decoration:none] absolute top-[2800.2px] left-[1523.3px] leading-[100%] text-[inherit]">
      Privacy policy
      </a>
      <div className="absolute top-[2855.9px] left-[1523.3px] leading-[100%]">
        Disclaimer
      </div>
      <div className="absolute top-[2911.5px] left-[1523.3px] leading-[100%]">
        Feedback and Help
      </div>
      <div className="absolute top-[268px] left-[585px] w-[660px] h-[484px] text-[17.05px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[660px] h-[484px]" />
        <div className="absolute top-[66px] left-[287px] leading-[100%]">
          WELCOME
        </div>
        <div className="absolute top-[196px] left-[110px] leading-[100%]">
          Username
        </div>
        <div className="absolute top-[253px] left-[111px] leading-[100%]">
          Password
        </div>
        <input
          className="[border:none] bg-white absolute top-[190px] left-[217px] w-[258px] h-[29px]"
          id="uname"
          type="text"
        />
        <input
          className="[border:none] bg-white absolute top-[247px] left-[217px] w-[258px] h-[29px]"
          id="password"
          type="password"
        />
        <div
          className="absolute top-[360px] left-[272px] w-[116px] h-[42px] cursor-pointer text-white"
          onClick={onGroupContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-51xl bg-royalblue w-[116px] h-[42px]" />
          <div className="absolute top-[13px] left-[32px] leading-[100%]">
            LOGIN
          </div>
        </div>
      </div>
      <b className="absolute top-[141px] left-[697px] text-[40.1px] leading-[100%] inline-block w-[455px] h-[34px]">
        TEACHER DASHBOARD
      </b>
    </div>
  );
};

export default TeachersLogin;

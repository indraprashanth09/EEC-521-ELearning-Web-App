import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import YouTube from 'react-youtube';
import "firebase/compat/database";


const HomepageMain2 = () => {
  const navigate = useNavigate();
  const videoId = 'gQ6_pEQZsVE';

  const onGroupButtonClick = useCallback(() => {
    navigate("/courses-page");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/courses-page");
  }, [navigate]);

  const onCOURSESTextClick = useCallback(() => {
    navigate("/courses-page");
  }, [navigate]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyCHxHxnSwVToRG4Fwl9dJF_ATqxr0EndSs",
      authDomain: "imposing-coyote-402318.firebaseapp.com",
      databaseURL: "https://imposing-coyote-402318-default-rtdb.firebaseio.com",
      projectId: "imposing-coyote-402318",
      storageBucket: "imposing-coyote-402318.appspot.com",
      messagingSenderId: "536078653018",
      appId: "1:536078653018:web:324c5ac74444ea300f6a63",
      measurementId: "G-0MFPB6DDCC"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const fetchData = async () => {
      try {
        const db = firebase.database();
        const snapshot1 = await db.ref("Students").once("value");
        const fetchedData = snapshot1.val();
        if (fetchedData) {
          // Get the first item in the data
          const firstItem = Object.values(fetchedData)[0];
          // Extract the first name
          const { firstName } = firstItem;
          setFirstName(firstName);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-base-7 text-black font-inter">
      <p style={{margin:"200px 400px"}}><YouTube videoId={videoId} opts={opts} /></p>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[625px] left-[612.9px] w-[186px] h-[51.9px]"
        onClick={onGroupButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-[48.96px] bg-gainsboro w-[186px] h-[51.9px]" />
        <div className="absolute top-[9.8px] left-[44.1px] text-[31.33px] leading-[100%] font-inter text-black text-left">
          START
        </div>
      </button>
      <div className="absolute top-[48px] left-[164.5px] w-[1172.6px] h-[67px]">
        <div
          className="absolute top-[6.9px] left-[0px] w-[714.6px] h-[60.2px] cursor-pointer"
          onClick={onGroupContainer1Click}
        >
          <div className="absolute top-[2.9px] left-[53.9px] w-[98.9px] h-[37.2px]">
            <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[98.9px] h-[37.2px]" />
          </div>
          <div className="absolute top-[12.7px] left-[76.4px] leading-[100%] inline-block w-[116.5px] h-[47px]">
            HOME
          </div>
          <div
            className="absolute top-[13.2px] left-[161.5px] leading-[100%] inline-block w-[168.4px] h-[47px] cursor-pointer"
          >
            COURSES
          </div>
          <div className="absolute top-[13.2px] left-[258.5px] leading-[100%] inline-block w-[182.1px] h-[47px]">
            ABOUT US
          </div>
          <div className="absolute top-[13.2px] left-[361.5px] leading-[100%] inline-block w-[228.1px] h-[47px]">
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
        <div className="absolute top-[17.6px] left-[858.1px] text-[19.28px] leading-[100%] inline-block w-[143.9px] h-[31.3px]">
          Welcome
        </div>
        <div className="absolute top-[0px] left-[1007.1px] bg-gainsboro w-[165.5px] h-[49px]">
        <p style={{fontSize:"15px",margin:"5px 50px"}}>{firstName}</p>
        </div>
      </div>
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
    </div>
  );
};

export default HomepageMain2;

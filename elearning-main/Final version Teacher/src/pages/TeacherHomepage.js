import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";


const TeacherHomepage = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/modify");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/studentsProgress");
  }, [navigate]);

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
        const snapshot = await db.ref("Students").once("value");
        const fetchedData = snapshot.val();
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
    <div className="relative bg-white w-full h-[1100px] overflow-hidden text-left text-[22.43px] text-black font-inter">
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
    <a className="[text-decoration:none] absolute top-[2800.2px] left-[1523.3px] leading-[100%] text-[inherit]">
        Privacy policy
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
      <div className="absolute top-[75.1px] left-[456.4px] text-[17.05px] leading-[100%] inline-block w-[99.6px] h-[43.1px]">
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
      <div className="absolute top-[59px] left-[1268px] bg-gainsboro w-[153.8px] h-[45.5px]">
      <p style={{fontSize:"15px",margin:"15px 20px"}}>{firstName}</p>
      </div>
      <img
        className="absolute h-[1.82%] w-[1.3%] top-[6.82%] right-[78.33%] bottom-[91.36%] left-[20.36%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/undefined1.png"
      />
      <div
        className="absolute top-[328px] left-[619px] w-[231px] h-[162px] cursor-pointer text-[17.05px]"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[231px] h-[162px]" />
        <div className="absolute top-[68px] left-[73px] leading-[100%]">
          <p className="m-0">{`MODIFY `}</p>
          <p className="m-0">CONTENT</p>
        </div>
      </div>
      <div
        className="absolute top-[328px] left-[1103px] w-[231px] h-[162px] cursor-pointer text-[17.05px]"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[231px] h-[162px]" />
        <div className="absolute top-[66px] left-[67px] leading-[100%]">
          <p className="m-0">{`STUDENTS `}</p>
          <p className="m-0">PROGRESS</p>
        </div>
      </div>
      <div className="absolute top-[243px] left-[863px] text-[26.05px] leading-[100%] opacity-[0.9]">
        YOUR ACTIONS
      </div>
    </div>
  );
};

export default TeacherHomepage;

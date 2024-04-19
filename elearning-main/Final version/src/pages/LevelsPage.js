import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const LevelsPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  const onCOURSESTextClick = useCallback(() => {
    navigate("/sign-uplogin");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/level-topics");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/level-topics");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/level-topics");
  }, [navigate]);

  const [firstName, setFirstName] = useState(null);
  const [sub2, setSub2] = useState(null);

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

    // Fetch data from Firebase
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

    
    const fetchData1 = async () => {
      try {
        const db1 = firebase.database();
        const snapshot1 = await db1.ref("Subject").once("value");
        const fetchedData1 = snapshot1.val();
        if (fetchedData1) {
          // Get the first item in the data
          const firstItem1 = Object.values(fetchedData1)[0];
          // Extract the first name
          const { sub2 } = firstItem1;
          setSub2(sub2);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    fetchData()
    fetchData1();
  }, []);

 

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-[27.35px] text-black font-inter">
      <div className="absolute top-[54.8px] left-[164.5px] w-[757.6px] h-[59.7px] text-base-7">
        <div className="absolute top-[3.2px] left-[167.5px] bg-gainsboro w-[98.9px] h-[37.2px]" />
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
      <div className="absolute top-[48px] left-[1171.6px] bg-gainsboro w-[165.5px] h-[49px]" >
      <p style={{fontSize:"15px",margin:"5px 50px"}}>{firstName}</p>
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
      <div className="absolute top-[163px] left-[565px] bg-gainsboro w-[415px] h-[92px]"/>
      <div
        className="absolute top-[283px] left-[466px] w-[613px] h-[164px] cursor-pointer"
        onClick={onGroupContainer4Click}
      >
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[613px] h-[164px]" />
        <p style={{fontSize:"45px",margin:"-100px 225px"}}>{sub2}</p>
      </div>
      <div className="absolute top-[354px] left-[716px] leading-[100%] font-lexend-mega inline-block w-[153px] h-[22px]">
        LEVEL 1
      </div>
      <div
        className="absolute top-[493px] left-[466px] w-[613px] h-[163px] cursor-pointer"
        onClick={onGroupContainer5Click}
      >
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[613px] h-[163px]" />
      </div>
      <div
        className="absolute top-[704px] left-[466px] w-[613px] h-[163px] cursor-pointer"
        onClick={onGroupContainer6Click}
      >
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[613px] h-[163px]" />
      </div>
      <div className="absolute top-[564px] left-[715px] leading-[100%] font-lexend-mega inline-block w-[154px] h-[22px]">
        LEVEL 2
      </div>
      <div className="absolute top-[774px] left-[715px] leading-[100%] font-lexend-mega inline-block w-[145px] h-[22px]">
        LEVEL 3
      </div>
    </div>
  );
};

export default LevelsPage;

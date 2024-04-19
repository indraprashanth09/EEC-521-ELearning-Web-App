import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const LevelTopics = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  const onCOURSESTextClick = useCallback(() => {
    navigate("/courses-page");
  }, [navigate]);


  const onRectangle4Click = useCallback(() => {
    navigate("/video-content");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/video-content");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/video-content");
  }, [navigate]);

  const [firstName, setFirstName] = useState(null);
  const [scl1,setScl1] = useState(null);
  const [sct1,setSct1] = useState(null);
  const [sct2,setSct2] = useState(null);
  const [sct3,setSct3] = useState(null);


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
        const snapshot1 = await db1.ref("Science").once("value");
        const fetchedData1 = snapshot1.val();
        if (fetchedData1) {
          // Get the first item in the data
          const firstItem1 = Object.values(fetchedData1)[0];
          // Extract the first name
          const { scl1 } = firstItem1;
          setScl1(scl1);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    const fetchData2 = async () => {
      try {
        const db1 = firebase.database();
        const snapshot1 = await db1.ref("Science").once("value");
        const fetchedData2 = snapshot1.val();
        if (fetchedData2) {
          // Get the first item in the data
          const firstItem2 = Object.values(fetchedData2)[1];
          // Extract the first name
          const { sct1 } = firstItem2;
          setSct1(sct1);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    const fetchData3 = async () => {
      try {
        const db1 = firebase.database();
        const snapshot1 = await db1.ref("Science").once("value");
        const fetchedData1 = snapshot1.val();
        if (fetchedData1) {
          // Get the first item in the data
          const firstItem3 = Object.values(fetchedData1)[2];
          // Extract the first name
          const { sct2 } = firstItem3;
          setSct2(sct2);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    const fetchData4 = async () => {
      try {
        const db1 = firebase.database();
        const snapshot1 = await db1.ref("Science").once("value");
        const fetchedData1 = snapshot1.val();
        if (fetchedData1) {
          // Get the first item in the data
          const firstItem3 = Object.values(fetchedData1)[2];
          // Extract the first name
          const { sct3 } = firstItem3;
          setSct3(sct3);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };
    


    fetchData();
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
   

  }, []);

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-base-7 text-black font-inter">
      <div className="absolute top-[54.8px] left-[164.5px] w-[751.6px] h-[59.7px]">
        <div className="absolute top-[4.2px] left-[166.5px] bg-gainsboro w-[98.9px] h-[37.2px]" />
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
      <div className="absolute top-[240px] left-[218px] bg-gainsboro w-[196px] h-[78px]" >
       <p style={{fontSize:"25px", margin:"25px 50px"}}>{scl1}</p>
      </div>

      <b className="absolute top-[318px] left-[709px] text-11xl leading-[100%]">
        TOPICS
      </b>
      <div
        className="absolute top-[479px] left-[558px] bg-gainsboro w-[415px] h-[38px] cursor-pointer"
        onClick={onRectangle4Click}
      >
      <p style={{fontSize:"15px", margin:"2px 160px"}}>{sct1}</p>
      </div>
      <div
        className="absolute top-[542px] left-[558px] bg-gainsboro w-[415px] h-[38px] cursor-pointer"
        onClick={onRectangle5Click}
      >
      <p style={{fontSize:"15px", margin:"2px 160px"}}>{sct2}</p>
      </div>
      
      <div
        className="absolute top-[605px] left-[558px] bg-gainsboro w-[415px] h-[38px] cursor-pointer"
        onClick={onRectangle6Click}
      >
      <p style={{fontSize:"15px", margin:"2px 160px"}}>{sct3}</p>
      </div>
      
    </div>
  );
};

export default LevelTopics;

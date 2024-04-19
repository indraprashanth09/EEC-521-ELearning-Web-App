import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const QuizPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepagemain2");
  }, [navigate]);

  const onCOURSESTextClick = useCallback(() => {
    navigate("/courses-page");
  }, [navigate]);
  
  const onGroupContainer4Click = useCallback(() => {
    navigate("/results");
  }, [navigate]);

  const [firstName, setFirstName] = useState(null);
  const [mq1, setMq1] = useState(null);
 /* const [scq2, setScq2] = useState(null);
  const [scq3, setScq3] = useState(null);
  const [scq4, setScq4] = useState(null);
  const [scq5, setScq5] = useState(null);*/

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

    const fetchData1 = async () => {
      try {
        const db = firebase.database();
        const snapshot1 = await db.ref("MathQuiz").once("value");
        const fetchedData1 = snapshot1.val();
        if (fetchedData1) {
          // Get the first item in the data
          const firstItem = Object.values(fetchedData1)[2];
          // Extract the first name
          const { mq1 } = firstItem;
          setMq1(mq1);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };  
/*
    const fetchData2 = async () => {
      try {
        const db = firebase.database();
        const snapshot = await db.ref("ScienceQuiz").once("value");
        const fetchedData = snapshot.val();
        if (fetchedData) {
          // Get the first item in the data
          const firstItem = Object.values(fetchedData)[1];
          // Extract the first name
          const { scq2 } = firstItem;
          setScq2(scq2);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };
    const fetchData3 = async () => {
      try {
        const db = firebase.database();
        const snapshot = await db.ref("ScienceQuiz").once("value");
        const fetchedData = snapshot.val();
        if (fetchedData) {
          // Get the first item in the data
          const firstItem = Object.values(fetchedData)[2];
          // Extract the first name
          const { scq3 } = firstItem;
          setScq3(scq3);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };
    const fetchData4 = async () => {
      try {
        const db = firebase.database();
        const snapshot = await db.ref("Students").once("value");
        const fetchedData = snapshot.val();
        if (fetchedData) {
          // Get the first item in the data
          const firstItem = Object.values(fetchedData)[3];
          // Extract the first name
          const { scq4 } = firstItem;
          setScq4(scq4);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    };

    const fetchData5 = async () => {
      try {
        const db = firebase.database();
        const snapshot = await db.ref("Students").once("value");
        const fetchedData = snapshot.val();
        if (fetchedData) {
          // Get the first item in the data
          const firstItem = Object.values(fetchedData)[403];
          // Extract the first name
          const { scq5 } = firstItem;
          setFirstName(scq5);
        }
      } catch (error) {
        console.error("Error fetching data from Firebase:", error.message);
      }
    }; */
    
    fetchData();
    fetchData1();

  }, []);

  return (
    <div className="relative bg-white w-full h-[1400px] overflow-hidden text-left text-[17.85px] text-black font-inter">
      <div className="absolute top-[54.8px] left-[164.5px] w-[750.6px] h-[59.7px] text-base-7">
        <div className="absolute top-[3.2px] left-[166.5px] bg-gainsboro w-[98.9px] h-[37.2px]" />
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
            className="absolute h-[83.37%] w-[83.33%] top-[8.31%] right-[8.22%] bottom-[8.31%] left-[8.44%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/menu.png"
          />
        </section>
      </div>
      <div className="absolute top-[65.6px] left-[1022.6px] text-[19.28px] leading-[100%] inline-block w-[143.9px] h-[31.3px]">
        Welcome
      </div>
      <div className="absolute top-[48px] left-[1171.6px] bg-gainsboro w-[165.5px] h-[49px]">
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
      <div className="absolute top-[293px] left-[450px] bg-gainsboro w-[850px] h-[538px]">
        
      </div> 
      <div className="absolute top-[383px] left-[535px] leading-[100%]">Q1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the smallest unit of matter? </div>
      <div className="absolute top-[450px] left-[535px] leading-[100%]">Q2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What gas do plants absorb during photosynthesis?</div>
      <div className="absolute top-[517px] left-[535px] leading-[100%]">Q3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the force that pulls objects towards the center of the Earth?</div>
      <div className="absolute top-[581px] left-[535px] leading-[100%]">Q4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the process by which a liquid turns into a gas at the surface of the liquid?</div>
      <div className="absolute top-[645px] left-[535px] leading-[100%]">Q5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is the main component of Earth's atmosphere?</div>
      <div
        className="absolute top-[860px] left-[747px] w-[84px] h-11 cursor-pointer text-[17.05px]"
        onClick={onGroupContainer4Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-51xl bg-darksalmon-100 w-[84px] h-11" />
        <b className="absolute top-[12px] left-[13px] leading-[100%] inline-block w-16 h-[15px]">
          Submit
        </b>
      </div>
      <div className="absolute top-[194px] left-[760px] text-[27.85px] leading-[100%]">
        QUIZ

      </div>
      <input
        className="[border:none] bg-white absolute top-[413px] left-[704px] w-[219px] h-[22px]"
        id="a1"
        type="text"
      />
      <input
        className="[border:none] bg-white absolute top-[476px] left-[704px] w-[219px] h-[22px]"
        id="a2"
        type="text"
      />
      <input
        className="[border:none] bg-white absolute top-[539px] left-[704px] w-[219px] h-[22px]"
        id="a3"
        type="text"
      />
      <input
        className="[border:none] bg-white absolute top-[602px] left-[704px] w-[219px] h-[22px]"
        id="a4"
        type="text"
      />
      <input
        className="[border:none] bg-white absolute top-[665px] left-[704px] w-[219px] h-[22px]"
        id="a5"
        type="text"
      />
      <div className="absolute top-[418px] left-[634px] text-[12.85px] leading-[100%]">
        ANSWER
      </div>
      <div className="absolute top-[481px] left-[634px] text-[12.85px] leading-[100%]">
        ANSWER
      </div>
      <div className="absolute top-[544px] left-[634px] text-[12.85px] leading-[100%]">
        ANSWER
      </div>
      <div className="absolute top-[607px] left-[634px] text-[12.85px] leading-[100%]">
        ANSWER
      </div>
      <div className="absolute top-[670px] left-[634px] text-[12.85px] leading-[100%]">
        ANSWER
      </div>
    </div>
  );
};

export default QuizPage;

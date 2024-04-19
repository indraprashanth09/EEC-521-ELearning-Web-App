import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';



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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Modify = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/teachers-homepage");
  }, [navigate]);

  //math topics
  const onGroupButtonClick = useCallback(async () => {
    try {
      const data = {
        ml1: document.getElementById("ml1").value,
        mt1: document.getElementById("mt1").value,
        mt2: document.getElementById("mt2").value,
        mt3: document.getElementById("mt3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'Math'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  //math video content
  const onGroupButton2Click = useCallback(async () => {
    try {
      const data = {
        mvl1: document.getElementById("mvl1").value,
        mvt1: document.getElementById("mvt1").value,
        mvt2: document.getElementById("mvt2").value,
        mvt3: document.getElementById("mvt3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'MathVideoContent'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  //
  const onGroupButton4Click = useCallback(async () => {
    try {
      const data = {
        scl1: document.getElementById("scl1").value,
        sct1: document.getElementById("sct1").value,
        sct2: document.getElementById("sct2").value,
        sct3: document.getElementById("sct3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'Science'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);


  const onGroupButton6Click = useCallback(async () => {
    try {
      const data = {
        scl1: document.getElementById("scl1").value,
        sct1: document.getElementById("sct1").value,
        sct2: document.getElementById("sct2").value,
        sct3: document.getElementById("sct3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'ScienceTopics'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton7Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton8Click = useCallback(async () => {
    try {
      const data = {
        scl1: document.getElementById("scl1").value,
        sct1: document.getElementById("sct1").value,
        sct2: document.getElementById("sct2").value,
        sct3: document.getElementById("sct3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'ScienceTopics'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton9Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  //scienceTopics
  const onGroupButton10Click = useCallback(async () => {
    try {
      const data = {
        scl1: document.getElementById("scl1").value,
        sct1: document.getElementById("sct1").value,
        sct2: document.getElementById("sct2").value,
        sct3: document.getElementById("sct3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'Science'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton11Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

//ScienceVideoContent
  const onGroupButton12Click = useCallback(async () => {
    try {
      const data = {
        scvl1: document.getElementById("scvl1").value,
        scvt1: document.getElementById("scvt1").value,
        scvt2: document.getElementById("scvt2").value,
        scvt3: document.getElementById("scvt3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'ScienceVideoContent'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton13Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  //social topics
  const onGroupButton14Click = useCallback(async () => {
    try {
      const data = {
        sl1: document.getElementById("sl1").value,
        st1: document.getElementById("st1").value,
        st2: document.getElementById("st2").value,
        st3: document.getElementById("st3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'Social'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton15Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  //social video content
  const onGroupButton16Click = useCallback(async () => {
    try {
      const data = {
        svl1: document.getElementById("svl1").value,
        svt1: document.getElementById("svt1").value,
        svt2: document.getElementById("svt2").value,
        svt3: document.getElementById("svt3").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'SocialVideoContent'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/students-progress");
  }, [navigate]);

  const onGroupButton17Click = useCallback(() => {
    navigate("/students-progress");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1771px] overflow-hidden text-left text-[12.85px] text-black font-inter">
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
      <div className="absolute top-[2744.6px] left-[1523.3px] text-[22.43px] leading-[100%]">
        Privacy policy
      </div>
      <a className="[text-decoration:none] absolute top-[2800.2px] left-[1523.3px] text-[22.43px] leading-[100%] text-[inherit]">
        Disclaimer
      </a>
      <div className="absolute top-[2855.9px] left-[1523.3px] text-[22.43px] leading-[100%]">
        Disclaimer
      </div>
      <div className="absolute top-[2911.5px] left-[1523.3px] text-[22.43px] leading-[100%]">
        Feedback and Help
      </div>
      <div className="absolute top-[1341px] left-[99px] bg-gainsboro w-[1723px] h-[631.8px]" />
      <b className="absolute top-[1490px] left-[619px] text-15xl-1 leading-[100%]">
        Read
      </b>
      <b className="absolute top-[1490px] left-[906px] text-15xl-1 leading-[100%]">
        Learn
      </b>
      <b className="absolute top-[1490px] left-[1187px] text-15xl-1 leading-[100%]">
        Enjoy
      </b>
      <div className="absolute top-[1390px] left-[732px] text-26xl leading-[100%]">
        Trusted by Educators
      </div>
      <div className="absolute top-[1523.6px] left-[1526.3px] text-[22.43px] leading-[100%]">
        Privacy policy
      </div>
      <a className="[text-decoration:none] absolute top-[1579.2px] left-[1526.3px] text-[22.43px] leading-[100%] text-[inherit]">
        Disclaimer
      </a>
      <div className="absolute top-[1634.9px] left-[1526.3px] text-[22.43px] leading-[100%]">
        Disclaimer
      </div>
      <div className="absolute top-[1690.5px] left-[1526.3px] text-[22.43px] leading-[100%]">
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
        className="absolute h-[1.01%] w-[1.3%] top-[3.72%] right-[78.59%] bottom-[95.28%] left-[20.1%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[197px] left-[372px] w-[506px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[506px] h-[141px]" />
        <div className="absolute top-[44px] left-[20px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[65px] left-[15px] leading-[100%]">
          TOPIC 1
        </div>
        <div className="absolute top-[86px] left-[15px] leading-[100%]">
          TOPIC 2
        </div>
        <div className="absolute top-[105px] left-[15px] leading-[100%]">
          TOPIC 3
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[112.3px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="ml1"
            type="text"
          />
        
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[45.8px] h-[8.2px]">
            MATHS
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mt1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mt2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[100.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mt3"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[29px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[82px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton1Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[196px] left-[1071px] w-[506px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[506px] h-[141px]" />
        <div className="absolute top-[44px] left-[20px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[65px] left-[15px] leading-[100%]">
          TOPIC 1
        </div>
        <div className="absolute top-[86px] left-[15px] leading-[100%]">
          TOPIC 2
        </div>
        <div className="absolute top-[105px] left-[15px] leading-[100%]">
          TOPIC 3
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[112.3px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mvl1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[45.8px] h-[8.2px]">
            MATHS
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mvt1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mvt2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[100.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mvt3"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[29px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton2Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[82px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton3Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[763px] left-[732px] w-[453px] h-[146px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[453px] h-[146px]" />
        <div className="absolute top-[63px] left-[34px] leading-[100%]">Q2</div>
        <div className="absolute top-[43px] left-[34px] leading-[100%]">Q1</div>
        <div className="absolute top-[25px] left-[14px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[83px] left-[34px] leading-[100%]">Q3</div>
        <div className="absolute top-[103px] left-[34px] leading-[100%]">
          Q4
        </div>
        <div className="absolute top-[122px] left-[34px] leading-[100%]">
          Q5
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[131.2px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mq1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[20px] left-[60px] w-[188.6px] h-[12.2px]"
            id="mql1"
            type="text"
          />
          <input
            className="[border:none] bg-[transparent] absolute top-[18px] left-[55px] w-[188.6px] h-[12.2px]"
            id="ml1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[45.8px] h-[8.2px]">
            MATHS
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mq2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mq3"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[99.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="mq4"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[119px] left-[60px] w-[188.6px] h-[12.2px]"
            id="mq5"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[36px] left-[327px] w-[84px] h-[29px]"
          onClick={onGroupButton4Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[85px] left-[327px] w-[84px] h-[29px]"
          onClick={onGroupButton5Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[931px] left-[732px] w-[453px] h-[146px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[453px] h-[146px]" />
        <div className="absolute top-[63px] left-[34px] leading-[100%]">Q2</div>
        <div className="absolute top-[43px] left-[34px] leading-[100%]">Q1</div>
        <div className="absolute top-[25px] left-[14px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[83px] left-[34px] leading-[100%]">Q3</div>
        <div className="absolute top-[103px] left-[34px] leading-[100%]">
          Q4
        </div>
        <div className="absolute top-[122px] left-[34px] leading-[100%]">
          Q5
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[131.2px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scq1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[20px] left-[60px] w-[188.6px] h-[12.2px]"
            id="scl1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[60px] h-2">
            SCIENCE
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scq2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scq3"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[99.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scq4"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[119px] left-[60px] w-[188.6px] h-[12.2px]"
            id="scq5"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[36px] left-[327px] w-[84px] h-[29px]"
          onClick={onGroupButton6Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[85px] left-[327px] w-[84px] h-[29px]"
          onClick={onGroupButton7Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[1104px] left-[732px] w-[453px] h-[146px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[453px] h-[146px]" />
        <div className="absolute top-[63px] left-[34px] leading-[100%]">Q2</div>
        <div className="absolute top-[43px] left-[34px] leading-[100%]">Q1</div>
        <div className="absolute top-[25px] left-[14px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[83px] left-[34px] leading-[100%]">Q3</div>
        <div className="absolute top-[103px] left-[34px] leading-[100%]">
          Q4
        </div>
        <div className="absolute top-[122px] left-[34px] leading-[100%]">
          Q5
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[131.2px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sq1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[20px] left-[60px] w-[188.6px] h-[12.2px]"
            id="sl1"
            type="text"
          />
          <input
            className="[border:none] bg-[transparent] absolute top-[18px] left-[55px] w-[188.6px] h-[12.2px]"
            id="ml1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[60px] h-2">
            SOCIAL
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sq2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sq3"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[99.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sq4"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[119px] left-[60px] w-[188.6px] h-[12.2px]"
            id="sq5"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[36px] left-[327px] w-[84px] h-[29px]"
          onClick={onGroupButton8Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[85px] left-[327px] w-[84px] h-[29px]"
          onClick={onGroupButton9Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[364px] left-[372px] w-[506px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[506px] h-[141px]" />
        <div className="absolute top-[44px] left-[20px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[65px] left-[15px] leading-[100%]">
          TOPIC 1
        </div>
        <div className="absolute top-[86px] left-[15px] leading-[100%]">
          TOPIC 2
        </div>
        <div className="absolute top-[105px] left-[15px] leading-[100%]">
          TOPIC 3
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[112.3px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scl1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[60px] h-2">
            SCIENCE
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sct1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sct2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[100.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sct3"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[29px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton10Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[82px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton11Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[363px] left-[1071px] w-[506px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[506px] h-[141px]" />
        <div className="absolute top-[44px] left-[20px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[65px] left-[15px] leading-[100%]">
          TOPIC 1
        </div>
        <div className="absolute top-[86px] left-[15px] leading-[100%]">
          TOPIC 2
        </div>
        <div className="absolute top-[105px] left-[15px] leading-[100%]">
          TOPIC 3
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[112.3px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scvl1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[60px] h-2">
            SCIENCE
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scvt1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scvt2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[100.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="scvt3"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[29px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton12Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[82px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton13Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[531px] left-[372px] w-[506px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[506px] h-[141px]" />
        <div className="absolute top-[44px] left-[20px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[65px] left-[15px] leading-[100%]">
          TOPIC 1
        </div>
        <div className="absolute top-[86px] left-[15px] leading-[100%]">
          TOPIC 2
        </div>
        <div className="absolute top-[105px] left-[15px] leading-[100%]">
          TOPIC 3
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[112.3px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="sl1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[60px] h-2">
            SOCIAL
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="st1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="st2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[100.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="st3"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[29px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton14Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[82px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton15Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[530px] left-[1071px] w-[506px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[506px] h-[141px]" />
        <div className="absolute top-[44px] left-[20px] leading-[100%]">
          LEVEL
        </div>
        <div className="absolute top-[65px] left-[15px] leading-[100%]">
          TOPIC 1
        </div>
        <div className="absolute top-[86px] left-[15px] leading-[100%]">
          TOPIC 2
        </div>
        <div className="absolute top-[105px] left-[15px] leading-[100%]">
          TOPIC 3
        </div>
        <div className="absolute top-[5px] left-[13px] w-[248.8px] h-[112.3px]">
          <input
            className="[border:none] bg-white absolute top-[39.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="svl1"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[60px] h-2">
            SOCIAL
          </div>
          <input
            className="[border:none] bg-white absolute top-[59.2px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="svt1"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[80px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="svt2"
            type="text"
          />
          <input
            className="[border:none] bg-white absolute top-[100.1px] left-[60.2px] w-[188.6px] h-[12.2px]"
            id="svt3"
            type="text"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[29px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton16Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8.3px] left-[23.7px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[35.6px] h-[8.2px]">
            Insert
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[82px] left-[387px] w-[84px] h-[29px]"
          onClick={onGroupButton17Click}
        >
          <div className="absolute top-[0px] left-[0px] bg-lightsteelblue w-[84px] h-[29px]" />
          <div className="absolute top-[8px] left-[21px] text-[12.85px] leading-[100%] font-inter text-darkslategray text-left inline-block w-[53px] h-2">
            Update
          </div>
        </button>
      </div>
      <div className="absolute top-[299px] left-[289px] text-[46.85px] leading-[100%]">
        <p className="m-0">T</p>
        <p className="m-0">O</p>
        <p className="m-0">P</p>
        <p className="m-0">I</p>
        <p className="m-0">C</p>
        <p className="m-0">S</p>
      </div>
      <div className="absolute top-[299px] left-[1006px] text-[46.85px] leading-[100%]">
        <p className="m-0">V</p>
        <p className="m-0">I</p>
        <p className="m-0">D</p>
        <p className="m-0">E</p>
        <p className="m-0">O</p>
        <p className="m-0">S</p>
      </div>
      <div className="absolute top-[700px] left-[904px] text-[46.85px] leading-[100%]">
        QUIZ
      </div>
    </div>
  );
};

export default Modify;

import { useCallback } from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { useNavigate } from "react-router-dom";

// Your Firebase configuration
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

const Signup = () => {
  const navigate = useNavigate();
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Courses page" to the project
  }, []);

  const onGroupButtonClick = useCallback(async () => {
    try {
      const data = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        role: document.getElementById("role").value,
        // Add other fields as needed
      };

      // Add data to the Realtime Database
      await push(ref(db, 'Students'), data);

      console.log('Data added to Realtime Database successfully!');
    } catch (error) {
      console.error('Error adding data to Realtime Database:', error.message);
    }
    navigate("/homepagemain2")
  }, [db]);

  return (
    <div className="relative bg-white w-full h-[1057px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="relative bg-white w-full h-[1057px] overflow-hidden text-left text-xl text-black font-inter">
      <div
        className="absolute top-[0px] left-[378px] w-[684px] h-[1080px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] bg-darkgray w-[684px] h-[1080px]" />
        <div className="absolute top-[306px] left-[64px] leading-[100%]">
          First Name
        </div>
        <div className="absolute top-[375px] left-[65px] leading-[100%]">
          Last Name
        </div>
        <div className="absolute top-[445px] left-[95px] leading-[100%]">
          Email Id
        </div>
        <div className="absolute top-[523px] left-[0px] leading-[100%]">
          Confirm Password
        </div>
        <div className="absolute top-[593px] left-[12px] leading-[100%]">
          Teacher/Student
        </div>
        <h1 className="m-0 absolute top-[106px] left-[219px] text-[50px] [text-decoration:underline] leading-[100%] font-bold font-inherit">
          WELCOME
        </h1>
        <input
          className="[border:none] bg-gainsboro absolute top-[294px] left-[184px] w-[391px] h-11"
          type="text"
          id="fname"
        />
        <input
          className="[border:none] bg-gainsboro absolute top-[364px] left-[184px] w-[391px] h-11"
          type="text"
          id="lname"
        />
        <input
          className="[border:none] bg-gainsboro absolute top-[433px] left-[184px] w-[391px] h-11"
          type="text"
          id="email"
        />
        <input
          className="[border:none] bg-gainsboro absolute top-[507px] left-[184px] w-[391px] h-11"
          type="password"
          id="pass"
        />
        <input
          className="[border:none] bg-gainsboro absolute top-[581px] left-[184px] w-[391px] h-11"
          type="text"
          id="role"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[655px] left-[245px] w-[173px] h-[50px]"
          onClick={onGroupButtonClick}
        >
          <button className="cursor-pointer p-0 bg-slateblue absolute top-[0px] left-[0px] rounded-[30px] box-border w-[173px] h-[50px] border-[1px] border-solid border-black" />
          <div className="absolute top-[14px] left-[43px] text-[22px] leading-[100%] font-inter text-white text-left">
            Register
          </div>
        </button>
      </div>
      <img
        className="absolute top-[85.1px] left-[0px] w-[366.8px] h-[884.5px] object-cover"
        alt=""
        src="/abc.png"
      />
      <img
        className="absolute top-[94.3px] left-[1072.8px] w-[572.2px] h-[884.5px] object-cover"
        alt=""
        src="/123.jpg"
      />
    </div>
    </div>
  );
};

export default Signup;

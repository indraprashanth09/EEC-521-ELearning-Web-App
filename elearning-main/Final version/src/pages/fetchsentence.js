const React = require('react');
const { useState, useEffect } = require('react');

// Your code here

import firebase from 'firebase/app';
import 'firebase/database';

const SentenceComponent = () => {
  const [sentence, setSentence] = useState('');

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };

  // Initialize Firebase if not already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = firebase.database();
        const sentenceRef = db.ref('MathQuiz/mq1');

        const snapshot = await sentenceRef.once('value');
        const sentenceData = snapshot.val();

        if (sentenceData) {
          setSentence(sentenceData);
        }
      } catch (error) {
        console.error('Error fetching sentence from Firebase:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <p>{sentence}</p>
    </div>
  );
};

export default SentenceComponent;

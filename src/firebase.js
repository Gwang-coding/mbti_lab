import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCALR-v1ANpjm0-D0hc3EbvcqUQi8uwC4I",
  authDomain: "n-mbti-6bdb4.firebaseapp.com",
  projectId: "n-mbti-6bdb4",
  storageBucket: "n-mbti-6bdb4.appspot.com",
  messagingSenderId: "1050027979274",
  appId: "1:1050027979274:web:5af34c65e0c6c62dd4e5f3",
  measurementId: "G-0N0FF6JQRJ"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
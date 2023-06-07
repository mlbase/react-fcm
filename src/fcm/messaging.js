import { getToken} from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getMessaging} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA3uBSw0kJ4-cdsY2wmuYRsHCRqI2p1sdg",
    authDomain: "developer-355408.firebaseapp.com",
    projectId: "developer-355408",
    storageBucket: "developer-355408.appspot.com",
    messagingSenderId: "692505408319",
    appId: "1:692505408319:web:5f5994f584568f7f02198a"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const GetCookie = (cookieName) => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      const result = cookie.split('=')[1];
      return result;
    }
  }
  return false;
}


export const FirebaseSetting = () => {
  
  let deviceToken = GetCookie('deviceToken');

  const registerServiceWorker = async () => {
      try {
        await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        console.log('서비스 워커 등록 완료');
      } catch (error) {
        console.log('서비스 워커 등록 실패:', error);
      }
  };

  registerServiceWorker();
  
  const requestPermission = () => {
      console.log("권한 요청 중...");
      Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
          console.log("알림 권한이 허용됨");

          // FCM 메세지 처리
          } else {
          console.log("알림 권한 허용 안됨");
          }
      });
  }

  

  // FCM 디바이스 토큰 가져오기
  const getDeviceToken = async () => {
      try {
        const token = await getToken(messaging);
        console.log("FCM 디바이스 토큰:", token);
        const date = new Date();
        date.setTime(date.getTime() + (6 * 24 * 60 * 60 * 1000));
        const expires = `${date.toUTCString()}`;
        document.cookie = `deviceToken=${token}; ${expires}; path=/`
        // 디바이스 토큰을 서버에 전송하거나 원하는 동작을 수행할 수 있습니다.
      } catch (error) {
        console.log("FCM 디바이스 토큰 가져오기 실패:", error);
      }
  };
  if (deviceToken === false){
    requestPermission();
    getDeviceToken();

  }

      
    

};
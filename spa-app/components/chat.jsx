// components/Chat.jsx
import SendbirdApp from '@sendbird/uikit-react/App';
const APP_ID = "YOUR_APP_ID";
const USER_ID = "ID_OF_USER_IN_ABOVE_APP";
export default () => (
   <div style={{ height: "100vh", width: "100vw" }}>
       <SendbirdApp appId={APP_ID} userId={USER_ID} />
   </div>
);
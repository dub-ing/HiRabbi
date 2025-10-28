
import AccountInfo from "../account/AccountInfo";
import NotificationInfo from "../notifications/NotificationInfo";
import SettingsInfo from "./SettingsInfo";

function SettingsLayout() {
    return (
      <>
        <AccountInfo />
        <NotificationInfo />
        <SettingsInfo />
      </>
    );
}

export default SettingsLayout

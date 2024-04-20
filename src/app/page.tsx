import Image from "next/image";
import PUPLogo from "../../public/PUPLogo.png";

export default function Home() {
  return (
    <main>

      <div className="topAccent">
        <Image src={PUPLogo} className="pupLogo" alt="PUPLogo" width={100} height={100}></Image>
        <div className="redAccent">
          <p className="university">
            Polytechnic University of the Philippines<br></br>
            Lopez, Quezon Campus
          </p>
        </div>
        <div className="yellowAccent">
          <p className="systemName audiowide-regular">
            One Tap Log
          </p>
        </div>
      </div>

      <div className="midContent">
        <div className="leftContent">
          <div className="standby">
            <div className="welcomeMessage">
              <p>Welcome!</p>
            </div>
            <div className="scanMessage">
              <div className="circleContainer">
                <div>
                  {/* If aninmation is available, place here. */}
                </div>
              </div>
              <p>Please scan your tag</p>
            </div>
          </div>
        </div>
        <div className="rightContent">
          <div className="topUsersContainer">
            <p className="firstUser">Juan Dela Cruz <br/> BSCE</p>

          </div>
          <div className="topUsersLabel">
            <p>Top Library Users - Students</p>
          </div>
        </div>
      </div>

      <div className="bottomAccent">
        <div className="totals">
          <div className="data">
            <p className="numberTotal">00</p>
            <p className="numberDescription">Currently Inside</p>
          </div>
          <div className="data">
            <p className="numberTotal">00</p>
            <p className="numberDescription">Today's Attendees</p>
          </div>
          <div className="data">
            <p className="numberTotal">00</p>
            <p className="numberDescription">Month's Total Attendees</p>
          </div>
        </div>
        <div className="admin">
          <button title="adminButton" type="button" className="adminIcon" id="adminView">
          <Image src="/admin-panel.png" width={100} height={100} alt="asd"></Image>
          </button>
          <p className="adminText">Admin View</p>
        </div>
        <div className="actions">
          <div className="subAction">
            <button title="registerButton" type="button" className="button" id="register">
              <Image className="icon" src="/user-avatar.png" width={100} height={100} alt=""></Image>
              <p className="text">Register</p></button>
            <p className="description">For new tags</p>
          </div>
          <div className="subAction">
            <button title="manualButton" type="button" className="button" id="manual">
            <Image className="icon-2" src="/guests-book.png" width={100} height={100} alt=""></Image>
              <p className="text">Manual</p></button>
            <p className="description">For Guests/Alumni</p>
          </div>
        </div>
        <div className="solidRed">
          
        </div>
        <div className="opaqRed">

        </div>
      </div>
    </main>
  );
}
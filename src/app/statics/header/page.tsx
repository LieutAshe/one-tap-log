import  Image from "next/image";
import PUPLogo from "@/../public/PUPLogo.png";

export default function Page() {
    return (
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
    );
}
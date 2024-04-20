'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
    return (
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
          <Image src="/admin-panel.png" width={100} height={100} alt="asd" onClick={() => router.push('/admin')}></Image>
          </button>
          <p className="adminText">Admin View</p>
        </div>
        <div className="actions">
          <div className="subAction">
            <button title="For New Users" type="button" className="button" id="register" onClick={() => router.push('/register')}>
              <Image className="icon" src="/user-avatar.png" width={100} height={100} alt=""></Image>
              <p className="text">Register</p></button>
            <p className="description">For new tags</p>
          </div>
          <div className="subAction">
            <button title="For Guests and Alumni" type="button" className="button" id="manual" onClick={() => router.push('/manual')}>
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
    );
}
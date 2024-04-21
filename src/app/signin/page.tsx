'use client'

import Image from 'next/image';
import './styles.css'
import { cancel, checkPassword, isEnter } from './actions';

export default function Page() {

    return (
        <div className="signInOverlay" id='signInOverlay'>
            <div className="promptContainer">
                <p className="promptTitle"> OTL - Admin Access</p>
                <Image className='logo' src={'/PUPLogo.png'} width={100} height={100} alt=''/>
                <p className="promptText">Enter password to continue:</p>
                <input className='password' placeholder='Password' type="password" name="password" id="adminPassword" onKeyDown={() => isEnter(event)} />
                <div className="signInActions">
                    <button type="submit" className='cancel' onClick={cancel}>Go Back</button>
                    <button type="button" className="enter" onClick={checkPassword}>Enter</button>
                </div>
            </div>
        </div>
    );
}
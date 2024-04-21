'use client'

import Image from 'next/image';
import './styles.css'
import { cancel, checkPassword, isEnter } from './actions';
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };      

    const handleLogin = () => {
        console.log(localStorage.getItem('authenticated'));
        if (password == 'OTL-PUPLC') {
            localStorage.setItem('authenticated', 'true');
            router.push('/admin')
        } else {
            localStorage.setItem('authenticated', 'false');
            alert("Incorrect Password");
        }
    }

    return (
        <div className="signInOverlay" id='signInOverlay'>
            <div className="promptContainer">
                <p className="promptTitle"> OTL - Admin Access</p>
                <Image className='logo' src={'/PUPLogo.png'} width={100} height={100} alt=''/>
                <p className="promptText">Enter password to continue:</p>
                <input className='password' placeholder='Password' onChange={handlePasswordChange} value={password} type="password" name="password" id="adminPassword" />
                <div className="signInActions">
                    <button type="submit" className='cancel' onClick={cancel}>Go Back</button>
                    <button type="button" className="enter" onClick={handleLogin}>Enter</button>
                </div>
            </div>
        </div>
    );
}
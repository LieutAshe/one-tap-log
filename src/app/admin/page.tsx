'use client'

import Header from '../statics/header/page';
import Footer from '../statics/footer/page';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { hasAccess } from '../signin/actions';


export default function Page() {
    const router = useRouter();

    useEffect(() => {
      if(!localStorage.getItem('authenticated')) {
        router.push('/home');
        return
      }
    }, []);

    const handleLogout = () => {
      localStorage.setItem('authenticated', 'false');
      router.push('/home');
    }

    return (
        <main>
            <button type='button' onClick={handleLogout}>Log-out</button>
            <Footer />
        </main>
    );
}
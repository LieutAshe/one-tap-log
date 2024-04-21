'use client'

import Header from '../statics/header/page';
import Footer from '../statics/footer/page';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { hasAccess } from '../signin/actions';


export default function Page() {
    const router = useRouter();
    const hasAccess = false;

    useEffect(() => {
      if(!hasAccess) {
        router.push('/signin');
        return
      }
    }, []);

    return (
        <main>
            <Header />
            <Footer />
        </main>
    );
}
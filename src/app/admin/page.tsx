'use client'

import Header from '../statics/header/page';
import Footer from '../statics/footer/page';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export default function Page() {
    const router = useRouter();
    const hasAccess = false

    useEffect(() => {
      if(!hasAccess) {
        router.push('/signin');
      }
    }, []);

    return (
        <main>
            <Header />
            <Footer />
        </main>
    );
}
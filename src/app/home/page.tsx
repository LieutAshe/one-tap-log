import React from 'react';
import LeftContent from './left/page';
import RightContent from './right/page';
import Header from '../statics/header/page';
import Footer from '../global/bottomUI/page';

const Page: React.FC = () => {
  return (
    <div>
        <Header />
        <div className='midContent'>
        <LeftContent />
        <RightContent />
        </div>
        <Footer />
      {/* Rest of your page content */}
    </div>
  );
};

export default Page;

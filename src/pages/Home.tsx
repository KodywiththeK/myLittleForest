import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterMenu from '../components/common/FooterMenu';
import HomeTitle from '../components/homeComponents/HomeTitle';
import HomeLevelSection from '../components/homeComponents/HomeLevelSection';
import HomeCommitSection from '../components/homeComponents/HomeCommitSection';
import HomeCommitCalendar from '../components/homeComponents/HomeCommitCalendar';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full min-w-[100vw] flex-col bg-darkNavy">
      <HomeTitle />
      <HomeLevelSection />
      <HomeCommitSection />
      <HomeCommitCalendar />
      <FooterMenu />
    </div>
  );
}

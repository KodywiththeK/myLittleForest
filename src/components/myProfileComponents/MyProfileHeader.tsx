import React from 'react';
import { AiFillGithub, AiFillSetting } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { FcReadingEbook } from 'react-icons/fc';
import profile1 from '../../assets/profile1.jpg';

export default function MyProfileHeader() {
  return (
    <div className="flex w-full justify-between text-[26px] font-bold text-white">
      <div className="flex flex-col">
        <div className="my-2 flex items-center">
          <FcReadingEbook className="mr-2 mb-1" /> {`Kody님`}
        </div>
        <div className="text-[24px]">오늘도 수고했어요!</div>
        <div className="mt-3 flex items-center text-[16px] font-medium">
          <AiFillGithub className="mb-1 mr-1 opacity-60" />
          <span className="opacity-60">KodywiththeK</span>
          <div className="ml-2 mb-1 flex items-center justify-center rounded-full bg-lightNavy">
            <AiFillSetting className="box-content p-2 text-[18px] text-white opacity-80" />
          </div>
        </div>
      </div>
      <img src={profile1} className="h-[120px] w-[120px] rounded-full" />
    </div>
  );
}

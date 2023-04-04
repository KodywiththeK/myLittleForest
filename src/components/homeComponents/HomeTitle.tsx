import React from 'react';
import { FcHome, FcReadingEbook } from 'react-icons/fc';
import { BsBellFill } from 'react-icons/bs';

export default function HomeTitle() {
  return (
    <div className="px-[20px] pt-[60px] pb-[20px] text-[26px] font-bold text-white ">
      <div className="flex items-center justify-between">
        <div className="my-2 flex items-center">
          <FcHome className="mr-2 mb-1" /> {`Kody님`}
        </div>
        <div className="mr-2">
          <BsBellFill className="text-[#d9d9d9]" />
        </div>
      </div>
      <div>오늘도 수고했어요!</div>
      <div className="mt-3 flex items-center text-[16px] font-medium opacity-60">
        <FcReadingEbook /> KodywiththeK
      </div>
    </div>
  );
}

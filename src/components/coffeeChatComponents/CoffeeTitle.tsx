import React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { FcIcons8Cup } from 'react-icons/fc';

interface CoffeeTitlePropsType {
  chatRooms: {
    roomName: string;
    memberId: string[];
    randomProfiles: {
      pic: string;
      name: string;
      position: string;
    }[];
  }[];
}

export default function CoffeeTitle({ chatRooms }: CoffeeTitlePropsType) {
  const totalChattingMembers = chatRooms
    .map((room) => Number(room.memberId.length))
    .reduce((a, b) => a + b);

  return (
    <div className="w-full px-4 pt-[60px] pb-[20px] text-[26px] font-bold text-white ">
      <div className="flex items-center justify-between px-2">
        <div className="my-2 flex items-center">
          <FcIcons8Cup className="mr-2 mb-1" /> 커피챗
        </div>
        <div className="mr-2">
          <BsBellFill className="text-[#d9d9d9]" />
        </div>
      </div>
      <div className="mt-4 text-center text-[16px] font-medium">
        {`총 ${chatRooms.length}개의 채팅방에서 ${totalChattingMembers}명의 이용자가 대화중입니다.`}
      </div>
    </div>
  );
}

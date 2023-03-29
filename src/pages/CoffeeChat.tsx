import React, { useState } from 'react';
import CoffeeChatRoom from '../components/coffeeChatComponents/CoffeeChatRoom';
import CoffeeTitle from '../components/coffeeChatComponents/CoffeeTitle';
import FooterMenu from '../components/common/FooterMenu';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpeg';
import profile3 from '../assets/profile3.jpg';

export default function CoffeeChat() {
  const [inputValue, setInputValue] = useState('');
  const coffeeInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(inputValue);
    // setInputValue('');
  };

  const chatRooms = [
    {
      roomName:
        'ChatGPT는 거짓말쟁이! 인공지능과 가짜뉴스에 대한 개발자 토크방',
      memberId: ['', '', '', '', '', '', '', '', '', '', '', ''],
      randomProfiles: [
        { pic: profile1, name: 'Phoebe', position: 'top-8 left-16' },
        { pic: profile2, name: 'Joey', position: 'top-4 left-8' },
        { pic: profile3, name: 'Chandler', position: 'top-0 left-0' },
      ],
    },
    {
      roomName: '주니어 프론트 개발자로서의 고민들... 나눕니다',
      memberId: ['', '', '', '', '', '', '', '', '', ''],
      randomProfiles: [
        { pic: profile1, name: 'Phoebe', position: 'top-8 left-16' },
        { pic: profile2, name: 'Joey', position: 'top-4 left-8' },
        { pic: profile3, name: 'Chandler', position: 'top-0 left-0' },
      ],
    },
    {
      roomName: '우리 빽둥이들 모이자!! [백엔드토크방]',
      memberId: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      randomProfiles: [
        { pic: profile1, name: 'Phoebe', position: 'top-8 left-16' },
        { pic: profile2, name: 'Joey', position: 'top-4 left-8' },
        { pic: profile3, name: 'Chandler', position: 'top-0 left-0' },
      ],
    },
  ];
  let chatRoomsResult = [...chatRooms];
  if (inputValue) {
    chatRoomsResult = chatRooms.filter((room) =>
      room.roomName
        .toLowerCase()
        .split(' ')
        .join('')
        .trim()
        .includes(inputValue.toLowerCase().split(' ').join('').trim())
    );
  }

  return (
    <div className="relative flex h-full min-h-screen w-full min-w-[100vw] flex-col items-center bg-darkNavy">
      <CoffeeTitle chatRooms={chatRooms} />
      <div className="mb-6 w-full px-4">
        <input
          onKeyDown={(e) => {
            // e.preventDefault();
            if (e.key === 'Enter') coffeeInputHandler(e);
          }}
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
          }}
          value={inputValue}
          type="text"
          placeholder="키워드로 검색"
          className="searchInput h-[60px] w-full rounded-md bg-[#E4E4E4] p-4 text-xl font-bold text-[#514848] placeholder:text-[#7B6D6D]"
        />
      </div>
      <CoffeeChatRoom chatRooms={chatRoomsResult} />
      <FooterMenu />
    </div>
  );
}

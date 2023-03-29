import React, { useState } from 'react';
import FooterMenu from '../components/common/FooterMenu';
import MyProfileHeader from '../components/myProfileComponents/MyProfileHeader';
import MyProfileInfo from '../components/myProfileComponents/MyProfileInfo';
import MyProfilePostFormat from '../components/myProfileComponents/MyProfilePostFormat';

export default function MyProfile() {
  const [postView, setPostView] = useState(true);

  return (
    <>
      <div className="relative flex h-full min-h-screen w-full min-w-[100vw] flex-col items-center bg-darkNavy text-white">
        <MyProfileHeader />
        <MyProfileInfo />
        <div className="mt-8 flex w-full flex-col items-center">
          <div className="flex w-[90%] items-center justify-around border border-darkNavy border-b-[#2F4658] font-semibold ">
            <button
              onClick={() => setPostView(true)}
              className={`w-[110px] cursor-pointer border border-darkNavy ${
                postView ? 'border-b-white' : 'opacity-50'
              }  bg-none py-5 text-center`}
            >
              게시글
            </button>
            <button
              onClick={() => setPostView(false)}
              className={`w-[110px] cursor-pointer border border-darkNavy ${
                !postView ? 'border-b-white' : 'opacity-50'
              }  bg-none py-5 text-center`}
            >
              스크랩
            </button>
          </div>
          <MyProfilePostFormat />
        </div>
      </div>
      <FooterMenu />
    </>
  );
}

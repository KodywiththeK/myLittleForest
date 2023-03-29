import React from 'react';
import { FcLike, FcPortraitMode, FcSms } from 'react-icons/fc';

export interface IBlogData {
  id: number;
  userName: string;
  likeCount: number;
  commentCount: number;
  img: string;
  title: string;
  detail: string;
  view: number;
  date: string;
  time: string;
}

export const dummyData: IBlogData[] = [
  {
    id: 1,
    userName: 'BuD',
    likeCount: 12,
    commentCount: 2,
    img: 'https://picsum.photos/105/105',
    title: '글 제목! 입니다',
    detail:
      '별하 예그리나 바나나 아름드리 이플 산들림 포도 가온누리 바람꽃 달볓 감사합니다 곰다시 비나리 안녕 소솜 별빛',
    view: 235,
    date: '20023.03.27',
    time: '03/28 19:41',
  },
  {
    id: 2,
    userName: '지현',
    likeCount: 2,
    commentCount: 10,
    img: 'https://picsum.photos/105/105',
    title: '글 제목',
    detail:
      '별하 예그리나 바나나 아름드리 이플 산들림 포도 가온누리 바람꽃 달볓 감사합니다 곰다시 비나리 안녕 소솜 별빛',
    view: 235,
    date: '20023.03.27',
    time: '03/28 16:22',
  },
  {
    id: 3,
    userName: '동성',
    likeCount: 7,
    commentCount: 26,
    img: 'https://picsum.photos/105/105',
    title:
      'As the rental car rolled to a stop on the dark road, her fear increased by the moment.',
    detail: 'Nancy decided to make the porta-potty her home.',
    view: 235,
    date: '20023.03.27',
    time: '03/28 19:21',
  },
  {
    id: 4,
    userName: 'Bud',
    likeCount: 12,
    commentCount: 2,
    img: 'https://picsum.photos/105/105',
    title: '글 제목',
    detail: '별하 예그리나 바나나 아름드리 이플 산들림',
    view: 235,
    date: '20023.03.27',
    time: '03/28 12:56',
  },
  {
    id: 5,
    userName: 'Bud',
    likeCount: 12,
    commentCount: 2,
    img: 'https://picsum.photos/105/105',
    title:
      '그들의 가치를 그러므로 군영과 뭇 이상의 작고 봄바람이다. 일월과 찾아다녀도, 품고 유소년에게서 위하여 그들의 청춘의 칼이다.',
    detail:
      '별하 예그리나 바나나 아름드리 이플 산들림 포도 가온누리 바람꽃 달볓',
    view: 235,
    date: '20023.03.27',
    time: '03/28 19:30',
  },
];

export default function MyProfilePostFormat() {
  return (
    <ul>
      {dummyData.map((data) => (
        <li
          key={data.id}
          className="mb-6 flex flex-col items-center gap-4 rounded-[20px] bg-midNavy "
        >
          <div className="flex flex-col gap-4 p-4">
            <div className="flex w-full">
              <div className="flex gap-1">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[58px] rounded-full"
                />
                <div className="pl-3">
                  <p className="text-xl font-bold">{data.userName}</p>
                  <p className="text-[17px] opacity-50">{data.time}</p>
                </div>
              </div>
              <div className="grow text-end font-bold">
                <div className="flex h-full items-center justify-end gap-3">
                  <FcPortraitMode />
                  <p>팔로우</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="mb-6 text-lg font-bold">{data.title}</h1>
              <p className="text-base">{data.detail}</p>
            </div>
          </div>
          <div className="flex h-[54px] w-full items-center gap-8 rounded-b-[20px] bg-[#2c2e34] px-6 text-base">
            <div className="flex items-center gap-2">
              <FcLike />
              {data.likeCount}
            </div>
            <div className="flex items-center gap-2">
              <FcSms />
              {data.commentCount}
            </div>
            <div className="flex grow items-center justify-end gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#f9e288"
                  d="M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"
                ></path>
              </svg>
              스크랩
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

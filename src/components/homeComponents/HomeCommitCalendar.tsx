import React from 'react';

export default function HomeCommitCalendar() {
  let dateFormat = (today: Date) =>
    today.getFullYear() +
    '-' +
    (today.getMonth() + 1 < 9
      ? '0' + (today.getMonth() + 1)
      : today.getMonth() + 1) +
    '-' +
    (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());

  function dateCalculator(date: Date, n: number) {
    return new Date(date.setDate(date.getDate() - n));
  }

  const values = [
    { date: '2023-02-15', count: 1 },
    { date: '2023-02-17', count: 2 },
    { date: '2023-02-20', count: 3 },
    { date: '2023-02-21', count: 1 },
    { date: '2023-02-24', count: 3 },
    { date: '2023-02-25', count: 4 },
    { date: '2023-02-26', count: 4 },
    { date: '2023-02-27', count: 0 },
    { date: '2023-03-01', count: 2 },
    { date: '2023-03-02', count: 2 },
    { date: '2023-03-04', count: 4 },
    { date: '2023-03-05', count: 3 },
    { date: '2023-03-06', count: 5 },
    { date: '2023-03-10', count: 3 },
    { date: '2023-03-13', count: 5 },
    { date: '2023-03-14', count: 2 },
    { date: '2023-03-16', count: 4 },
    { date: '2023-03-17', count: 3 },
    { date: '2023-03-19', count: 1 },
    { date: '2023-03-21', count: 3 },
    { date: '2023-03-23', count: 2 },
    { date: '2023-03-24', count: 4 },
    { date: '2023-03-28', count: 1 },
  ];

  let resultArr = [] as string[];
  const calendarArr = Array.from({ length: 112 }, (v, i) => i)
    .map((date) => dateFormat(dateCalculator(new Date(), date)))
    .reverse();
  calendarArr.map((i) => {
    if (values.map((value) => value.date).includes(i)) {
      if (values.find((value) => value.date === i)?.count === 0)
        return resultArr.push('bg-[#534340]');
      if (values.find((value) => value.date === i)?.count === 1)
        return resultArr.push('bg-[#B4E197]');
      if (values.find((value) => value.date === i)?.count === 2)
        return resultArr.push('bg-[#9DC08B]');
      if (values.find((value) => value.date === i)?.count === 3)
        return resultArr.push('bg-[#4e944f]');
      if (
        values.find((value) => value.date === i) !== undefined &&
        Number(values.find((value) => value.date === i)?.count) > 3
      )
        return resultArr.push('bg-[#446a46]');
    } else {
      return resultArr.push('bg-[#534340]');
    }
  });

  return (
    <div className="relative mb-2 flex min-h-[280px] w-full min-w-[100vw] flex-col">
      <div className="absolute inset-4 flex flex-col justify-between rounded-2xl bg-midNavy px-8 pt-8 pb-4 text-white">
        <div className="text-[26px] font-bold">커밋 캘린더</div>
        <div className="mt-6 flex h-[200px] w-full items-center justify-center">
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {resultArr.map((backgroundColor, index) => (
              <div
                key={index}
                className={`h-4 w-4 rounded-sm ${backgroundColor} `}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

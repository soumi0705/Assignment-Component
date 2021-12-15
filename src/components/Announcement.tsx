/* eslint-disable spellcheck/spell-checker */
import React, { FC } from 'react';
const Announcement: FC<unknown> = () => {
  const data = [
    {
      id: '00001',
      content: 'All the best for today !',
      date: new Date(2021, 12, 14),
    },
    {
      id: '00002',
      content: 'Practical Exam gentle reminders.',
      date: new Date(2021, 11, 21),
    },
    {
      id: '00003',
      content: 'Submit your assignments on time!',
      date: new Date(2021, 12, 9),
    },
  ];
  // const numbers = [1, 2, 3, 4, 5];
  const listItems = data.map((data) => (
    <li className='list-group-item' key={data.id} id={data.id}>
      <div className='expense-item__description'>
        <div className='expense-item__price'>{data.date.toDateString()}</div>
        <p>{data.content}</p>
      </div>
    </li>
  ));
  return (
    <>
      <div className='jumbotron'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='ms-2'>Announcements</h2>
          <button className='me-2'>View All</button>
        </div>
        <ul className='list-group'>{listItems}</ul>
      </div>
    </>
  );
};

export default Announcement;

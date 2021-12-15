/* eslint-disable spellcheck/spell-checker */
import React, { FC } from 'react';
const Assessment: FC<unknown> = () => {
  const data = [
    {
      id: 'e1',
      title: 'Assessment 2',
      date: new Date(2021, 2, 24),
    },
    {
      id: 'e1',
      title: 'Assessment 3',
      date: new Date(2021, 4, 21),
    },
    {
      id: 'e1',
      title: 'Assessment 4',
      date: new Date(2021, 6, 16),
    },
  ];
  // const numbers = [1, 2, 3, 4, 5];
  const listItems = data.map((data) => (
    <li className='list-group-item' key={data.id} id={data.id}>
      <div className='assessment-item__data'>
        <div className='assessment-item__date'>{data.date.toDateString()}</div>
        <p className='assessment-item__title text-truncate'>{data.title}</p>
      </div>
    </li>
  ));
  return (
    <>
      <div className='jumbotron'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='ms-2'>Assessment</h2>
          <button className='me-2'>View All</button>
        </div>
        <ul className='list-group'>{listItems}</ul>
      </div>
    </>
  );
};

export default Assessment;

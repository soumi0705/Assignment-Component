import React from 'react';
import { Redirect as RouterRedirect } from 'react-router-dom';

const Redirect = (props: any) => {
  let page;
  if (props.data.roles.includes('Student') && props.data.placement === 'course_navigation') {
    page = 'progress-bar'; // Should be changed to the page name !!!
  }
  switch (page) {
    case 'progress-bar': // Should be changed to the page name !!!
      return (
        <RouterRedirect
          to={{
            pathname: '/progress_bar', // Should be changed to the page name !!!
          }}
        />
      );
    case 'healthCheck':
      return (
        <RouterRedirect
          to={{
            pathname: '/healthCheck',
          }}
        />
      );
    default:
      return <h1>Invalid Role</h1>;
  }
};

export default Redirect;

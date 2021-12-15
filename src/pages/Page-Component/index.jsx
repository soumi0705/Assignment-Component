/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useContext, useMemo } from 'react';

import { StoreContext } from '../../data/store';
// import Header from '../../components/Header';
import axios from '../../data/config';
import '../../styles/layout.scss';
import Assessment from '../../components/Assessment';
import Announcement from '../../components/Announcement';

const AppContainer = () => {
  const { state } = useContext(StoreContext);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useMemo(() => {
    return state.userState ? state.userState : {};
  }, [state.userState]);

  useEffect(() => {}, [user]);
  // user.roles.includes('Student') && Object.keys(courseProg).length !== 0 ?   Will be required later....
  return true ? (
    <div id='app-container'>
      <div className='row'>
        <div className='col'>
          <Assessment />
        </div>
        <div className='col-8'>
          <Announcement />
        </div>
      </div>
    </div>
  ) : (
    <div>Role Check Failed</div>
  );
};

export default AppContainer;

/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useContext, useEffect } from 'react';
import Redirect from './Redirect';
import { StoreContext } from '../data/store';
import axios from '../data/config';
import AutorenewIcon from '@material-ui/icons/Autorenew';

interface UserData {
  user_id?: number;
  course_id?: number;
  roles?: any;
  account?: string;
  placement?: string;
  msg?: string;
}

const Redirection: FC<unknown> = () => {
  const { dispatch } = useContext<any>(StoreContext);
  const [userData, setUserData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserData = async () => {
    try {
      const ltiRedirectResponse = await axios.get('/lti/userData');
      setUserData(ltiRedirectResponse.data);
      dispatch({
        type: 'STORE_USER_DATA',
        payload: {
          user_id: ltiRedirectResponse.data.user_id,
          roles: ltiRedirectResponse.data.roles,
          placement: ltiRedirectResponse.data.placement,
          course_id: ltiRedirectResponse.data.course_id,
          account: ltiRedirectResponse.data.account,
        },
      });
      setIsLoading(false);
    } catch (err: any) {
      console.log(`Error !`);
      setUserData({ msg: err.message });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {!isLoading ? (
        userData?.msg ? (
          <h5>{userData?.msg}</h5>
        ) : (
          <Redirect data={userData} />
        )
      ) : (
        <div className='center-screen flex-column text-center'>
          <span>
            <AutorenewIcon className='rotate' />
          </span>
          <h5>Please wait until redirection</h5>
        </div>
      )}
    </>
  );
};

export default Redirection;

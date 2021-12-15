import axios from 'axios';

const baseURL = (env: any) => {
  switch (env) {
    case 'development':
      return 'http://localhost:9000';
    case 'staging':
      return 'https://stg-progress-bar-lti-alb.sim.crystaldelta.net'; //need to update with staging url
    case 'production':
      return 'https://progress-bar-lti-alb.sim.crystaldelta.net'; //need to update with production url
    default:
      return '';
  }
};

const axiosConfig = axios.create({
  baseURL: baseURL(process.env.REACT_APP_APP_ENV),
  withCredentials: true,
});

export default axiosConfig;

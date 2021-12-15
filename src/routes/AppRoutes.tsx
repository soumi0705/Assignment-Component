import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

interface propsInterface {
  path: string;
  component: React.FC;
}

const AppRouter = (props: { routeData: propsInterface[] }) => {
  return (
    <BrowserRouter>
      <Switch>
        {props.routeData.map((route, index) => (
          <Route key={index} path={route.path} exact component={route.component} />
        ))}
        <Route path='/' render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;

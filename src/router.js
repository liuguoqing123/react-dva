import React from 'react';
import { Router, Route, Switch } from 'dva/router';
//import IndexPage from './routes/IndexPage';
//import Products from './routes/Products';
//import Users from './routes/Users';
import PropTypes from 'prop-types';

debugger
//const let 分别表示常量和变量 const 和 let 都是块级作用域
const registerModel = (app, model) => {
  if(!(app._models.filter(m => m.namespace === model.namespace).length === 1)){
    app.model(model.default)
  }
}

const RouterConfig = ({history, app}) => {
  debugger
  const routes = [{
    path: '/',
    name: 'IndexPage',
    getComponent(nextState, cb){
      require.ensure([],(require) => {
        cb(null,require('./routes/IndexPage').default)
      });
    },
  },{
    path: '/users',
    name: 'Users',
    getComponent(nextState, cb){
      require.ensure([],(require) => {
        registerModel(app,require('./models/users').default);
        cb(null,require('./routes/Users').default)
      });
    },
  },
  ];

  return <Router history={history} routes={routes} />;
};
  //传入参数效验
  RouterConfig.prototype = {
    history: PropTypes.object,
    app: PropTypes.object,
  }

  export default RouterConfig;





//  function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/products" exact component={Products} />
//       </Switch>
//     </Router>
//   );
// }

// export default function({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/users" component={Users} />
//     </Router>
//   );
// };

//export default RouterConfig;

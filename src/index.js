import dva , { connect } from 'dva';
import createLoading from 'dva-loading';
import './index.css';
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();
// const app = dva({
//    initialState: {
//      products: [
//        { name: 'dva', description: 'test1', id: 1 },
//        { name: 'antd', description: 'test2',  id: 2 },
//        { name: 'lewis',  description: 'test3', id: 3}
//      ],
//    },
//  });
//  console.log(app._store); // 顶部的 state 数据

 //以下是测试
//  console.log([1, 2, 3].map(x => x + 1)); 
//  console.log([1, 2, 3].map((function(x) {
//     return x + 1;
//   }).bind(this))); 
// // 对象
// const user = { name: 'guanguan', age: 2 };
// const { name, age } = user;
// console.log(`${name} : ${age}`);  // guanguan : 2
// // 数组
// const arr = [1, 2];
// const [foo, bar] = arr;
// console.log(bar);  // 2

// const name1 = 'duoduo';
// const age1 = 8;
// const user1 = { name1, age1 }; 
// console.log(user1);

// const todos = ['Learn dva'];
// console.log([...todos, 'Learn antd']); 

// const arr1 = ['a', 'b', 'c'];
// const [first, ...rest] = arr1;
// console.log(rest);

// const [first1, , ...rest1] = arr1;
// console.log(rest1);

// function directions(first, ...rest) {
//     console.log(rest);
// }
// directions('a', 'b', 'c'); 


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 3. Model
//app.model(require('./models/products').default);
app.model(require('./models/users').default);

// 4. Router
//app.router(require('./router').default);
app.router(require('./router').default);

// 5. Start
//app.start(document.getElementById('root'));
app.start('#root');

// 点火燃料
const fetch = require('node-fetch');
// 给狗狗一块牛肉壮行
const dog = require('../dog')('beef');

// todos号火箭
exports.todosRocket = async function () {
  // 引擎发动机
  // @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API
  const response = await fetch(`${process.env.TARGET_SERVER_BEEF}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    // ... 其它选项
  });
  const data = await response.json();
  // 命令狗叫
  dog.woof('todosRocket', data);
};

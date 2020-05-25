# launchdog

把狗狗发射到服务器，通过叫声来`DEBUG`

## 发射步骤

### 运输燃料

`yarn` or `npm install`

### 在`.env`中定义服务器的地址

`cp .env.template .env`

请务必要定义服务器地址，否则狗狗会被发射到外太空。

### 在`launchers/`中建造发射架

通常来说，命名是个绝活，一个好名字能让我们沉浸在工作中而忘记下班，而一个坏名字，不仅能让我们感到恶心，而且还导致我们写更狗屎的代码，进而导致员工跑路，留下一堆烂摊子。在这个项目中，你将不必担心命名这个问题，因为我们在这里所做的一切，都在想方设法把狗狗发射到服务器中。

为了让狗狗不用担心服务器会爆炸，我们通常把发射架命名为`beef`、`chicken`等狗狗爱吃的食物。

### 建造火箭

在每个发射架中建造火箭，不用担心火箭太多的问题，因为这种担心毫无意义，唯一需要注意的是，请建造适合狗狗的座位。

### 让狗狗`dog`系好安全带

请确保火箭不会爆炸，否则`系好安全带`就是一句空谈。

### 开始发射

`yarn start`

强烈谴责明知服务器会爆炸仍然发射狗狗的行为。

### 在`woof-woof`中聆听狗狗的叫声

请确保你能看懂狗语。

## 例子

```js
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

```

## 发射架命名指南

这些是狗狗爱吃的食物

- `beef`
- `chicken`
- `duck`
- `pork`
- `lamb`
- `bone`
- `egg`

## FAQ

- 和`postman`有何不同？

人和狗狗的不同

- 我该放弃`postman`吗？

放弃吧

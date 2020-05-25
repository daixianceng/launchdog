require('dotenv').config();
const beef = require('./launchers/beef');

// 调度中心
(async function() {
  // 点火
  await beef.todosRocket();
})();
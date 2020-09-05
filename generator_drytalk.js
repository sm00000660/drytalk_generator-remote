// 隨機抽取陣列元素
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
// const option = { target: designer };

function generatorDrytalk(option) {
  // 找出使用者選擇的身分
  const targets = {
    engineer: "工程師",
    designer: "設計師",
    entrepreneur: "創業家",
  };

  const tasks = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  // return error
  if (!option) {
    return `選個對象吧!`;
  }

  const target = targets[option];
  // random task
  const randomTask = sample(tasks[option]);
  // rendom phrase
  const randomPhrase = sample(phrase);

  // 產生幹話
  return `身為一個${target},${randomTask},${randomPhrase}吧!`;
}

module.exports = generatorDrytalk;

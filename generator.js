// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateRubbish(options) {
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };

  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  // create a collection to store things user picked up
  let collection = [];

  if (options.engineer === "on") {
    collection =
      options.nickname +
      "身為一個工程師，" +
      sample(task.engineer) +
      sample(phrase) +
      "吧？";
  }

  if (options.designer === "on") {
    collection =
      options.nickname +
      "身為一個設計師，" +
      sample(task.designer) +
      sample(phrase) +
      "吧？";
  }

  if (options.entrepreneur === "on") {
    collection =
      options.nickname +
      "身為一個創業家，" +
      sample(task.entrepreneur) +
      sample(phrase) +
      "吧？";
  }

  // return the generated rubbish words
  return collection;
}

// export generatePassword function for other files to use
module.exports = generateRubbish;

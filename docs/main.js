// XMLHttpRequestを使ってjsonデータを読み込む
let requestURL = './datas/kanji.json';//jsonへのパス
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
 
// JSONデータをJavaScriptオブジェクトに変換
request.onload = function () {
  let data = request.response;
  data = JSON.parse(JSON.stringify(data));
  dataArray(data);
}
 
// foreachでJSONデータをHTMLに出力
function dataArray(els) {
  console.log(els);
}

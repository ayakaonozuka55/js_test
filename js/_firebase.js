// step1
// 入力項目、ボタン、出力先を取得する

// const itemInput = document.querySelector("#name");
// const priceInput = document.querySelector("#price");
// const noteInput = document.querySelector("#note");
// const outputArea = document.querySelector("#js-outputArea");

// const saveBtn = document.querySelector("#saveBtn");

// step2
// ボタンが動くかどうか確認する
// saveBtn.addEventListener("click", function() {
//   console.log(outputArea);
// });

// step3
// 取得した要素から要素から値を取得する

// saveBtn.addEventListener("click", function() {
//   const itemName = itemInput.value;
//   const price = priceInput.value;
//   const note = noteInput.value;
//   console.log(itemName, price, note);
// });

// step4
// 入力したデータをHTMLに整形する関数を作る
// function getTableRow(itemName, price, note) {
//   const html = `
//   <tr>
//     <td>${itemName}</td>
//     <td>${price}</td>
// 		<td>${note}</td>
// 	</tr>
//   `;
//   return html;
// }

// saveBtn.addEventListener("click", function() {
//   const itemName = itemInput.value;
//   const price = priceInput.value;
//   const note = noteInput.value;
//   const html = getTableRow(itemName, price, note);
//   console.log(html);
// });

// step5
// 作ったHTMLをDOMに挿入する
// function addTable(html) {
//   outputArea.insertAdjacentHTML("beforeend", html);
// }
// saveBtn.addEventListener("click", function() {
//   const itemName = itemInput.value;
//   const price = priceInput.value;
//   const note = noteInput.value;
//   const html = getTableRow(itemName, price, note);
//   outputArea.insertAdjacentHTML("beforeend", html);
//   clearInput();
// });

// step6
// 入力項目をからにする
// function clearInput() {
//   itemInput.value = "";
//   priceInput.value = "";
//   noteInput.value = "";
// }

// step7
// ローカルストレージの1つのkeyに対して複数のデータを保存する
// function getinputItems() {
//   const data = {
//     itemName: itemInput.value,
//     price: priceInput.value,
//     note: noteInput.value
//   };
//   return data;
// }

// step8
// ローカルストレージに登録するためのkeyを現在時間から生成する
// function getTime() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = (date.getMonth() + 1) % 12;
//   const day = date.getDate();
//   const hour = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();
//   const time = `${year}/${month}/${day}/${hour}:${min}:${sec}`;
//   return time;
// }

// function setLocalStrage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }

// saveBtn.addEventListener("click", function() {
//   // const key = getTime();
//   // const value = getinputItems();
//   // setLocalStrage(key, value);
// });

// step9
// ページが読み込まれた時、ローカルストレージの全てのデータを取得してDOMに差し込む
// function getAllData() {
//   const arr = [];
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const val = JSON.parse(localStorage.getItem(key));
//     arr.push(val);
//   }
//   return arr;
// }

// function setAllData(dataArr) {
//   let html = "";
//   for (let i = 0; i < dataArr.length; i++) {
//     html += getTableRow(dataArr[i].itemName, dataArr[i].price, dataArr[i].note);
//   }
//   addTable(html);
// }

// step10
// ボタンを押した時の処理
// 1 インプット要素から値を取得する
// 2 その値をローカルストレージに書き込む
// 3 DOMに差し込む
// function saveBtnCallback() {
//   // domへの追加
//   const data = getinputItems();
//   const html = getTableRow(data.itemName, data.price, data.note);
//   addTable(html);
//   // ローカルストレージへの登録
//   const key = getTime();
//   setLocalStrage(key, data);
//   // inputAreaをからにする処理
//   clearInput();
// }

// step11
// 初期化処理
// function init() {
//   // ローカルストレージに登録されている全てのデータを取得して描画する
//   const data = getAllData();
//   setAllData(data);
//   // saveボタンを押した時の処理を定義
//   saveBtn.addEventListener("click", saveBtnCallback);
// }

// 初期化を実行
// init();

//------------------------------------------------
// extra
// 動的に追加した要素に対するイベントの設定
//------------------------------------------------

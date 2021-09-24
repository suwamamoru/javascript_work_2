//実行ボタンが押下されたときのプログラム
function clickbtn() {

  //出力結果を一旦空欄にする
  const ul = document.getElementById('list');
  ul.innerHTML="";

  //入力窓の値をidより取得 (なぜか文字列で取得したので文字列を数値に変換)
  let fizz = document.getElementById('itgFizz').value;
  let buzz = document.getElementById('itgBuzz').value;

  //fizz,buzzが空欄の場合、警告文を表示
  if (fizz === "" || buzz === "") {

    //警告文の子要素を親要素に追加する
    const li = document.createElement('li');
    li.textContent = '整数値を入力してください';
    ul.appendChild(li);
  } else {

    //文字列から数値に変換
    fizz = Number(fizz);
    buzz = Number(buzz);

    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {

      //定数fizz、buzzには入力された整数値が入る。
      for (let i = 1; i < 100; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
          const li = document.createElement('li');
          li.textContent = `FizzBuzz ${i}`;
          ul.appendChild(li);
        } else if (i % fizz === 0) {
          const li = document.createElement('li');
          li.textContent = `Fizz ${i}`;
          ul.appendChild(li);
        } else if (i % buzz === 0) {
          const li = document.createElement('li');
          li.textContent = `Buzz ${i}`;
          ul.appendChild(li);
        }
      }
    } else {

      //少数、文字列の場合、警告文を表示
      const li = document.createElement('li');
      li.textContent = '整数値を入力してください';
      ul.appendChild(li);
    }
  }
};
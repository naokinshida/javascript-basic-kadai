  //btnというidを持つHTML要素を取得し、定数に代入
  const btm =document.getElementById('btn');

  //textというidを持つHTML要素を取得し、定数に代入する
  const text = document.getElementById('text');

  //HTML要素がクリックされた時にイベント処理
  btn.addEventListener('click',() => {

    text.textContent = 'ボタンをクリックしました。';
    console.log(text);
  })
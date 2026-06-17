
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>商品注文ページ</title>

<style>
body{
  font-family: Arial, sans-serif;
  margin:20px;
  background:#f5f5f5;
}

h1{
  text-align:center;
}

.form-area{
  max-width:1200px;
  margin:auto;
}

input{
  width:300px;
  padding:10px;
  margin-top:5px;
  margin-bottom:15px;
}

.products{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
  gap:20px;
}

.product{
  background:white;
  border-radius:10px;
  padding:15px;
  box-shadow:0 2px 5px rgba(0,0,0,0.2);
}

.product img{
  width:100%;
  height:180px;
  object-fit:cover;
  border-radius:5px;
}

.product h3{
  margin-top:10px;
}

select{
  width:100%;
  padding:8px;
}

button{
  width:100%;
  padding:15px;
  margin-top:20px;
  font-size:18px;
  background:#007bff;
  color:white;
  border:none;
  border-radius:5px;
  cursor:pointer;
}
</style>

</head>

<body>

<div class="form-area">

<h1>商品注文ページ</h1>

<form action="/order" method="post">
<p>
  <label>お名前</label><br>
  <input type="text" name="name" class="small-input" required>
</p>

<p>
  <label>メールアドレス</label><br>
  <input type="email" name="email" class="small-input" required>
</p>

<p>
  <label>電話番号</label><br>
  <input type="tel" name="tel" class="small-input" required>
</p>

<div class="products">

<div class="product">
<img src="https://picsum.photos/300/200?1"/>
<h3>商品1</h3>
<select name="product1">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?2"/>
<h3>商品2</h3>
<select name="product2">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?3"/>
<h3>商品3</h3>
<select name="product3">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?4"/>
<h3>商品4</h3>
<select name="product4">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?5"/>
<h3>商品5</h3>
<select name="product5">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?6"/>
<h3>商品6</h3>
<select name="product6">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?7"/>
<h3>商品7</h3>
<select name="product7">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?8"/>
<h3>商品8</h3>
<select name="product8">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?9"/>
<h3>商品9</h3>
<select name="product9">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

<div class="product">
<img src="https://picsum.photos/300/200?10"/>
<h3>商品10</h3>
<select name="product10">
<option value="0">0個</option>
<option value="1">1個</option>
<option value="2">2個</option>
<option value="3">3個</option>
<option value="4">4個</option>
<option value="5">5個</option>
</select>
</div>

</div>

<button type="submit">注文する</button>

</form>

</div>

</body>
</html>
  `);
});

app.post('/order', (req, res) => {

  const data = req.body;

  res.send(`
    <h1>注文完了</h1>

    <p>お名前：${data.name}</p>
    <p>メール：${data.email}</p>
    <p>電話番号：${data.tel}</p>

    <h2>注文内容</h2>

    <pre>${JSON.stringify(data, null, 2)}</pre>

    <a href="/">戻る</a>
  `);
});

// 環境変数PORTがあればそれを使い、なければローカル用に3000を使う
const port = process.env.PORT || 3000;

// '0.0.0.0' を指定して外部からの接続を許可するのがポイントです
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});


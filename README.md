# Library-Application

## 概要
このプログラムははOpen Library APIから本を検索し、取得した情報を元に動的なHTML要素を生成して表示するシンプルな図書館アプリケーションです。
javaScriptでのDOM操作を行っており、またwebAPIから取得したデータを変換するためfetch関数とプロミスオブジェクトを使用しています。

## webアプリのデモ画面
https://github.com/Kanatanagano/Library-Application/assets/112442087/6320287c-bd05-4006-906a-6728c3017cd4

## Library-ApplicationのURL
https://kanatanagano.github.io/Library-Application/

## どうしてこれを作った？
なにかユーザー側が操作をして動的に表示されるサイトをデモで作りたかったからです。

## 特徴は？
ISBN（International Standard Book Number: 国際規格コード）を打ち込むと目的の本が表示されます。技術的にはweb APIを使いJSONを取得します。

1. これがスタート画面です。ISBNコードを検索すると次のように画面に表示されます。

<img width="1128" alt="スクリーンショット 2023-11-04 220254" src="https://github.com/Kanatanagano/Library-Application/assets/112442087/2918b56c-aa38-4a6e-bffb-5a1e10e4df51">

2. これが出力された画面です。目的の画像とその内容が得られることが分かります。

<img width="1128" alt="スクリーンショット 2023-11-04 220400" src="https://github.com/Kanatanagano/Library-Application/assets/112442087/d4ba9e9b-e3e6-443d-8143-af744072a87c">

## 使用技術
<table>
<tr>
  <th>カテゴリ</th>
  <th>技術スタック</th>
</tr>
<tr>
  <td rowspan=4>フロントエンド</td>
  <td>HTML</td>
</tr>
<tr>
  <td>フレームワーク : Bootstrap</td>
</tr>
<tr>
  <td>JavaScript</td>
</tr>
<td rowspan=2>その他</td>
  <td>Git</td>
</tr>
<tr>
  <td>GitHub</td>
  </tr>
</table>


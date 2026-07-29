# NMS Resource DB
「自分が欲しかったのは、資源の増やし方がすぐ分かるアプリだった」

No Man's Sky 日本語版向けの「資源の増やし方」に特化したシンプルな検索データベースです。

---

## コンセプト

ゲーム中に

「この資源、どうやって増やすんだっけ？」

と思った時に、数秒で確認できることを目的としています。

攻略サイトを開くより速く、必要な情報だけを表示することを目指しています。

---

## 現在の機能

- 資源名検索
- Enterキーで検索
- recipes.json読込
- 増殖レシピ表示
- 日本語版正式名称対応

---

## データ登録ルール

- 日本語版ゲーム内正式名称を使用
- 最新ゲームバージョン準拠
- ゲーム内確認を最優先とする
- 精製機の種類を表示
- JSON形式を統一

---

## 登録済みグループ（予定）

### 第1グループ（基本資源）

- 炭素
- 濃縮炭素
- 酸素
- フェライト塵
- 純粋フェライト
- 磁化フェライト
- 有色金属

### 第2グループ（元素）

- 銅
- カドミウム
- エメリル
- インジウム

### 第3グループ（鉱物）

- コバルト
- イオン化コバルト
- リン
- パラフィニウム
- アンモニア
- 二酸化物
- ウラン
- 黄鉄鉱

### 第4グループ

登録中

---

## 今後の予定

- 第4グループ完成
- ゲーム内レシピ確認
- 「増殖できません」表示機能
- 部分一致検索
- 材料から検索
- おすすめレシピ表示
- No Man's Sky風UI改善

---

## 使用技術

- HTML
- CSS
- JavaScript
- JSON
- GitHub Pages

---
# NMS RESOURCE DB

No Man's Sky の資源データベース。

## 現在のバージョン

Ver.1.0 (開発中)

---

## 本日の進捗

### データ構造を全面的に見直し

従来の message 中心の構造を廃止し、役割ごとにデータを分割。

現在のJSON形式

```json
{
    "name": "",
    "guide": [],
    "recipes": [],
    "convert": [],
    "collect": [],
    "use": [],
    "note": []
}
```

---

### script.js 改修

表示処理を関数ごとに分割。

実装済み

- escapeHtml()
- createSection()
- showGuide()
- showRecipes()
- showConvert()
- showCollect()
- showUse()
- showNote()

showResult() は各表示関数を呼び出す構成へ変更。

---

### 今後の方針

JSONにはデータのみを記述し、
表示方法はすべてJavaScript側で管理する。

これにより、

- デザイン変更
- 検索機能追加
- タップ検索追加

などをJSONを書き換えることなく実装可能となった。

## Overview

# Version

## Ver.1.0 Development

### Data format update

資源データ形式を正式フォーマットへ変更。

各資源JSONは以下の項目で管理する。

- name
- category
- guide
- recipes
- convert
- collect
- use
- note

---

## Guide format

おすすめ増殖手順は以下の形式で管理。

```json
{
    "step": "①",
    "title": "手順タイトル",
    "text": "説明文"
}
##今後
Data registration policy

今後の資源データ登録は専用ページ情報を基準にする。

登録ルール：

Wiki専用ページを確認
精製レシピは可能な限り全て登録
おすすめルートのみguideへ登録
入手方法・用途・補足も記録
Current registered resources
Basic resources
炭素
濃縮炭素
Development notes

Ver.1.0ではデータ量増加を前提として設計。

将来的に、

部分一致検索
検索候補表示
資源名クリックによる関連検索
精製素材ツリー表示

などの機能追加を予定。

## ライセンス

個人利用

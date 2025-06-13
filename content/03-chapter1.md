# 第1章 はじめに

この章では、Vivliostyle CLIの基本的な使い方について説明します。

## 1.1 Vivliostyle CLIとは

Vivliostyle CLIは、HTMLやMarkdownから高品質なPDFを生成するコマンドラインツールです。

### 主な特徴

- **マルチフォーマット対応**: PDF、EPUB、WebPublicationの出力が可能
- **CSS組版**: 高度なレイアウト制御
- **Markdown対応**: VFM（Vivliostyle Flavored Markdown）をサポート
- **テーマシステム**: 豊富なテーマライブラリ

## 1.2 インストール

Node.js環境で以下のコマンドを実行してください：

```bash
npm install -g @vivliostyle/cli
```

## 1.3 基本的な使い方

### プレビュー

```bash
vivliostyle preview manuscript.md
```

### PDF生成

```bash
vivliostyle build manuscript.md -o book.pdf
```

## 1.4 設定ファイル

`vivliostyle.config.js`ファイルを使用することで、詳細な設定が可能です：

```javascript
module.exports = {
  title: 'My Book',
  author: 'Author Name',
  size: 'A5',
  theme: '@vivliostyle/theme-techbook',
  entry: ['chapter1.md', 'chapter2.md']
};
```

## 1.5 まとめ

この章では、Vivliostyle CLIの基本概念と簡単な使用方法を学びました。
次の章では、より高度な機能について説明します。
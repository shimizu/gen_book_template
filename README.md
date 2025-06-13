# Vivliostyle CLI 電子書籍作成テンプレート

このリポジトリは、[Vivliostyle CLI](https://docs.vivliostyle.org/#/vivliostyle-cli)を使用して電子書籍を作成するためのテンプレートです。Markdownで書いた原稿から、PDF、EPUB、WebPublicationの各形式で書籍を出力できます。

## 🚀 クイックスタート

### 1. 前提条件

- Node.js v16 以上
- npm または yarn

### 2. セットアップ

```bash
# リポジトリをクローン
git clone <このリポジトリのURL>
cd vivliostyle-book-template

# 依存関係をインストール
npm install

# または yarn を使用
yarn install
```

### 3. 書籍をビルド

```bash
# プレビューモードで確認
npm run preview

# PDF生成
npm run build:pdf

# 全形式生成（PDF + EPUB + WebPub）
npm run build:all
```

## 📁 ディレクトリ構造

```
/
├── README.md                   # このファイル
├── package.json                # npm設定とスクリプト
├── vivliostyle.config.js       # Vivliostyle設定ファイル
├── content/                    # 書籍コンテンツ
│   ├── 02-preface.md          # まえがき
│   ├── 03-chapter1.md         # 第1章
│   ├── 04-chapter2.md         # 第2章
│   └── 99-appendix.md         # 付録
├── assets/                     # 画像・CSS等のアセット
│   ├── images/                # 画像ファイル
│   │   └── cover.png          # 表紙画像
│   └── css/                   # スタイルシート
│       └── custom.css         # カスタムCSS
├── output/                     # 生成される書籍ファイル
└── themes/                     # Vivliostyleテーマ（自動生成）
```

## ⚙️ カスタマイズ方法

### 1. 基本情報の変更

`vivliostyle.config.js`を編集して書籍の基本情報を設定します：

```javascript
const vivliostyleConfig = {
  title: 'あなたの書籍タイトル',    // 書籍タイトル
  author: 'あなたの名前',          // 著者名
  language: 'ja',                 // 言語設定
  size: 'A5',                     // ページサイズ
  theme: '@vivliostyle/theme-techbook', // テーマ
  // ...
};
```

### 2. 章構成の変更

`vivliostyle.config.js`の`entry`配列を編集して章構成を変更します：

```javascript
entry: [
  // 表紙
  {
    rel: 'cover',
    title: '表紙',
    imageSrc: './assets/images/cover.png'
  },
  // 目次（自動生成）
  { rel: 'contents', title: '目次' },
  // 各章
  { path: 'content/chapter1.md', title: '第1章' },
  { path: 'content/chapter2.md', title: '第2章' },
  // 付録
  { path: 'content/appendix.md', title: '付録' }
]
```

### 3. スタイルのカスタマイズ

- `assets/css/custom.css`でカスタムスタイルを編集
- 既存のVivliostyleテーマを変更または独自テーマを作成
- フォント、色、レイアウトなどを調整可能

### 4. テーマの変更

利用可能なテーマ：
- `@vivliostyle/theme-techbook` - 技術書向け
- `@vivliostyle/theme-academic` - 学術論文向け
- `@vivliostyle/theme-slide` - スライド向け
- その他：[Vivliostyle Themes](https://vivliostyle.github.io/themes/)

## 📝 執筆のヒント

### Markdownの拡張機能

このテンプレートは[VFM (Vivliostyle Flavored Markdown)](https://vivliostyle.github.io/vfm/)を使用しており、以下の機能が利用できます：

```markdown
# 見出し

## 数式サポート
インライン数式: $E = mc^2$

ブロック数式:
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

## 表
| 項目 | 説明 |
|------|------|
| PDF | 印刷向け |
| EPUB | 電子書籍 |

## コードブロック
```javascript
console.log('Hello, World!');
```

## 脚注
本文中の説明[^1]

[^1]: これは脚注です
```

### 画像の挿入

```markdown
![図のキャプション](../assets/images/sample.png)
```

### 改ページ制御

```markdown
<!-- 改ページを挿入 -->
<div class="page-break"></div>

<!-- 改ページを避ける -->
<div class="avoid-break">
この内容は改ページされません
</div>
```

## 🛠️ 使用可能なコマンド

```bash
# プレビュー（ブラウザで確認）
npm run preview

# PDF生成
npm run build:pdf

# EPUB生成
npm run build:epub

# WebPublication生成
npm run build:webpub

# 全形式生成
npm run build:all

# 出力ファイルのクリーンアップ
npm run clean
```

## 🎨 出力形式の特徴

### PDF
- 印刷に適した高品質な出力
- ページ番号、ヘッダー・フッター対応
- 図表の精密な配置制御

### EPUB
- 電子書籍リーダー対応
- リフロー可能なレイアウト
- 目次ナビゲーション

### WebPublication
- Webブラウザで閲覧可能
- レスポンシブデザイン
- インタラクティブな要素に対応

## 🔧 トラブルシューティング

### よくある問題

**Q: 日本語フォントが表示されない**
A: `assets/css/custom.css`でフォント設定を確認してください

**Q: 画像が表示されない**
A: 画像ファイルのパスが正しいか確認し、`copyAsset`設定をチェックしてください

**Q: PDFが生成されない**
A: Node.jsのメモリ不足の可能性があります。以下を試してください：
```bash
node --max-old-space-size=4096 ./node_modules/.bin/vivliostyle build
```

### デバッグ方法

1. `npm run preview`でプレビューを確認
2. ブラウザの開発者ツールでCSS/レイアウトを検証
3. エラーログの確認

## 📚 参考資料

- [Vivliostyle CLI Documentation](https://docs.vivliostyle.org/#/vivliostyle-cli)
- [VFM (Vivliostyle Flavored Markdown)](https://vivliostyle.github.io/vfm/)
- [Vivliostyle Themes](https://vivliostyle.github.io/themes/)
- [CSS Paged Media](https://www.w3.org/TR/css-page-3/)

## 📄 ライセンス

このテンプレートはMITライセンスの下で公開されています。自由に改変・再配布していただけます。

## 🤝 コントリビューション

改善提案やバグレポートは、GitHubのIssuesまでお願いします。Pull Requestも歓迎です。

---

**Happy Writing! 📖✨**
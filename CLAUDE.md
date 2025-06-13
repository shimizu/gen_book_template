# CLAUDE.md - Vivliostyle電子書籍テンプレート

## プロジェクト概要
このプロジェクトは、Vivliostyle CLIを使用した日本語技術書作成テンプレートです。Markdown形式でコンテンツを記述し、PDF、EPUB、WebPublicationの3形式で出力できます。

## 技術スタック
- **Vivliostyle CLI**: v9.2.0
- **テーマ**: @vivliostyle/theme-techbook v2.0.0
- **対応フォーマット**: PDF, EPUB, WebPub
- **言語**: 日本語
- **ページサイズ**: A5

## ディレクトリ構成
```
/home/shimizu/_book/gen_book_template/
├── README.md                    # プロジェクト説明書
├── package.json                 # 依存関係とスクリプト
├── vivliostyle.config.js        # Vivliostyle設定ファイル
├── content/                     # 書籍コンテンツ
│   ├── 02-preface.md           # まえがき
│   ├── 03-chapter1.md          # 第1章
│   ├── 04-chapter2.md          # 第2章
│   └── 99-appendix.md          # 付録
├── assets/                      # 静的ファイル
│   ├── css/custom.css          # カスタムスタイル
│   └── images/cover.png        # 表紙画像
├── output/                      # 生成されたファイル
│   ├── book.pdf                # PDF出力
│   ├── book.epub               # EPUB出力
│   └── book-webpub/            # WebPub出力
└── themes/                      # テーマファイル
```

## 主要コマンド
```bash
# 開発・プレビュー
npm run preview              # ブラウザでプレビュー

# ビルド
npm run build               # 全形式ビルド
npm run build:pdf           # PDF生成
npm run build:epub          # EPUB生成
npm run build:webpub        # WebPub生成

# 管理
npm run clean               # 出力ディレクトリクリア
```

## 設定ファイル
### vivliostyle.config.js
- 書籍のメタデータ（タイトル、著者、言語）
- ページサイズとテーマ設定
- 章構成とファイルパス
- 出力形式の設定
- 目次と表紙の設定

### assets/css/custom.css
- 日本語フォント設定（Noto Serif CJK JP、Yu Mincho）
- カラーテーマ（ネイビーブルー #2c3e50、アクセント #3498db）
- A5サイズ対応レイアウト
- 印刷最適化設定

## コンテンツ作成ガイド
### Markdown記法
- VFM（Vivliostyle Flavored Markdown）対応
- 数式サポート（LaTeX記法）
- 表、コードブロック、引用に対応
- 画像とリンクの埋め込み可能

### ファイル命名規則
- `02-preface.md` - まえがき
- `03-chapter1.md` - 第1章
- `04-chapter2.md` - 第2章
- `99-appendix.md` - 付録

## 品質チェック
### ビルド前確認
```bash
# テーマとパッケージが正しくインストールされていることを確認
npm list @vivliostyle/theme-techbook

# 設定ファイルの文法チェック
node -c vivliostyle.config.js
```

### 出力確認
- PDF: 高品質印刷用（A5サイズ、適切なマージン）
- EPUB: 電子書籍リーダー対応
- WebPub: ブラウザ表示用

## トラブルシューティング
### よくある問題
1. **ビルドエラー**: `vivliostyle.config.js`の設定確認
2. **フォント表示**: カスタムCSSのフォント設定確認
3. **画像表示**: アセットパスとコピー設定確認
4. **数式表示**: VFMの数式設定確認

### ログ確認
```bash
# 詳細ログでビルド
npm run build -- --verbose
```

## カスタマイズ
### 新しい章の追加
1. `content/`に新しいMarkdownファイル作成
2. `vivliostyle.config.js`の`entry`配列に追加
3. 必要に応じて目次の`sectionDepth`調整

### スタイルのカスタマイズ
- `assets/css/custom.css`を編集
- カラーテーマ、フォント、レイアウトを調整
- 印刷用とWeb用のスタイル分離

### 表紙の変更
- `assets/images/cover.png`を差し替え
- `vivliostyle.config.js`の`cover`設定を確認

## 注意事項
- Node.js v16.0.0以上が必要
- 日本語フォントの表示にはシステムフォントが必要
- 大きな画像ファイルは出力サイズに影響
- 数式の複雑さによってはビルド時間が延長

## 開発履歴
- 初期テンプレート作成
- @vivliostyle/theme-techbook導入
- カスタムCSS整備
- 日本語コンテンツ作成
- 3形式出力対応完了
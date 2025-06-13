# 付録

## A. 参考資料

### A.1 公式ドキュメント

- [Vivliostyle CLI Documentation](https://docs.vivliostyle.org/#/vivliostyle-cli)
- [VFM (Vivliostyle Flavored Markdown)](https://vivliostyle.github.io/vfm/)
- [Vivliostyle Themes](https://vivliostyle.github.io/themes/)

### A.2 関連リンク

- [CSS Paged Media Module](https://www.w3.org/TR/css-page-3/)
- [CSS Generated Content Module](https://www.w3.org/TR/css-content-3/)

## B. トラブルシューティング

### B.1 よくある問題

#### 日本語フォントが表示されない

解決方法：
```css
body {
  font-family: "Noto Serif CJK JP", serif;
}
```

#### PDF生成でメモリエラーが発生する

解決方法：
```bash
node --max-old-space-size=4096 vivliostyle build
```

### B.2 デバッグ方法

1. `vivliostyle preview`でプレビューを確認
2. ブラウザの開発者ツールでCSS検証
3. エラーログの確認

## C. カスタマイズ例

### C.1 独自テーマの作成

```css
/* custom-theme.css */
:root {
  --main-color: #2c3e50;
  --accent-color: #3498db;
}

h1 {
  color: var(--main-color);
  border-bottom: 2px solid var(--accent-color);
}
```

### C.2 ページ番号のカスタマイズ

```css
@page {
  @bottom-right {
    content: "Page " counter(page) " of " counter(pages);
  }
}
```

## D. ライセンス

このテンプレートはMITライセンスの下で公開されています。
自由に改変・再配布していただけます。

---

*このテンプレートがあなたの電子書籍制作に役立てば幸いです。*
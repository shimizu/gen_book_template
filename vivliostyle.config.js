// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  title: 'My Book Title', // 書籍のタイトル
  author: 'Your Name', // 著者名
  language: 'ja', // 日本語設定
  size: 'A5', // ページサイズ
  theme: '@vivliostyle/theme-techbook', // デフォルトテーマ（技術書用）
  image: 'ghcr.io/vivliostyle/cli:9.2.0',
  
  entry: [ // 章構成
    {
      rel: 'cover',
      title: '表紙',
      imageSrc: './assets/images/cover.png',
      imageAlt: '書籍の表紙'
    },
    {
      rel: 'contents',
      title: '目次'
    },
    {
      path: 'content/02-preface.md',
      title: 'まえがき'
    },
    {
      path: 'content/03-chapter1.md',
      title: '第1章 はじめに'
    },
    {
      path: 'content/04-chapter2.md',
      title: '第2章 基本概念'
    },
    {
      path: 'content/99-appendix.md',
      title: '付録'
    }
  ],
  
  entryContext: '.', // エントリファイルの基準ディレクトリ
  
  output: [ // 複数の出力形式
    {
      path: './output/book.pdf',
      format: 'pdf'
    },
    {
      path: './output/book.epub',
      format: 'epub'
    },
    {
      path: './output/book-webpub',
      format: 'webpub'
    }
  ],
  
  workspaceDir: '.vivliostyle', // 中間ファイル保存先
  
  toc: {
    title: '目次',
    htmlPath: 'index.html',
    sectionDepth: 3
  },
  
  cover: {
    src: './assets/images/cover.png',
    name: '書籍の表紙',
    htmlPath: 'cover.html'
  },
  
  copyAsset: {
    includes: ['assets/**/*'],
    excludes: ['**/*.tmp', '**/.DS_Store'],
    includeFileExtensions: ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'css', 'js']
  },
  
  vfm: {
    hardLineBreaks: false,
    disableFormatHtml: false,
    math: true // 数式サポート
  }
};

module.exports = vivliostyleConfig;

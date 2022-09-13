Oysters紹介ページ
====

メンテナ向け
----

### 初回インストール

```
npm install 
```

### 開発用サーバ起動 & 変更時自動ビルド

```
npm run dev:ts
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## メンバーの追加方法

以下にメンバーの追加手順を記します。

1. `content/members/images`にご自身のプロフィール画像を追加する。
2. コマンド `npm run add-member` を実行し、質問に沿ってコマンドラインに入力していく。
3. `content/members` 以下に追加したいメンバーの名前のついたtsファイルが存在しているか内容も含めて確認する。
4. 別ブランチを切ってコミットし、PRを作成してレビュー依頼する。（誰でもOK）

## 画像の最適化方法について

[cyrilwanner/next-optimized-images@canary](https://github.com/cyrilwanner/next-optimized-images)を使った画像リサイズ/圧縮ができます。

```tsx
<img
  src={require(`@/content/members/${member.image}?width=144&height=144`)}
  width={72}
  height={72}
/>

/**
 * 結果:
 * <img src="data:image/jpeg;base64,/9..." width="72" height="72">
 */
```

**注意:**

- 画像パスは動的に設定できますが、クエリ部分に変数は使用できません。
- 変換後の画像のサイズがある程度小さい場合は自動的にインライン画像になります（設定で変更可能）

詳しい使い方は[cyrilwanner/next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)を確認してください。

Special Thanks
----

- [nextjs](https://nextjs.org/)

- [Hugo](https://gohugo.io/) ※旧サイトで利用
- [themefisher/meghna-hugo](https://github.com/themefisher/meghna-hugo)
- [themefisher/themefisher-font](https://github.com/themefisher/themefisher-font)

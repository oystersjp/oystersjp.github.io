This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 画像の最適化方法について

[cyrilwanner/next-optimized-images@canary](https://github.com/cyrilwanner/next-optimized-images/tree/canary)を使った画像リサイズ/圧縮ができます。

```tsx
<img
  src={require(`@/public${member.image}?width=144&height=144`)}
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

詳しい使い方は[cyrilwanner/next-optimized-images@canary](https://github.com/cyrilwanner/next-optimized-images/tree/canary)を確認してください。
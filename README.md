# @vipelar/ui

DESIGN.md 準拠のデザイントークンと、それに沿った共通コンポーネント。

## インストール

```sh
pnpm i @vipelar/ui
```

peer dependencies:

| パッケージ          | 条件                    |
| ------------------- | ----------------------- |
| `react`/`react-dom` | >=19                    |
| `lucide-react`      | >=1 (`Alert`利用時のみ) |

## セットアップ

**importが2つ必要。** 役割が違うので、片方だけでは足りない。

- `@vipelar/ui/styles.css` (JS/TSXから)
- `@vipelar/ui/theme.css` (CSSから)

## 開発

| コマンド     | 内容                                     |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | playgroundを起動し、コンポーネントを目視 |
| `pnpm test`  | vitestでロジックを検証                   |
| `pnpm lint`  | eslintと型チェック                       |
| `pnpm build` | `dist`の生成                             |

## ローカルでの試験

publish前に動作確認する場合、pnpm workspaceで参照する。

`pnpm-workspace.yaml`:

```yaml
packages:
  - 'ui'
```

`package.json`:

```json
{
  "dependencies": {
    "@vipelar/ui": "workspace:*"
  }
}
```

`node_modules/@vipelar/ui`が`ui/`へのsymlinkになる。

```sh
pnpm install
pnpm --filter @vipelar/ui build
```

### 注意点

- publish前にbuild必須
- 依存を変えたらlockfile再生成必須:

```sh
pnpm install --ignore-workspace --lockfile-only
```

symlink経由で`ui/node_modules/react`が拾われてReactが二重ロードされることがある(`useContext`がnullになるエラーが出る)。呼び出し側の`vite.config.ts`に`dedupe`を追加すること:

```ts
export default defineConfig({
  // ...
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});
```

publish後の通常インストール(`pnpm add @vipelar/ui`)ではこの設定は不要。

## Components

- `Text`
- `Heading`
- `Alert`
- `Space`
- `Skeleton`
- `NumberedSteps`
- `Field`
- `CodeBlock`
- `PropsTable`
- `Callout`

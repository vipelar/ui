# @vipelar/ui

DESIGN.md 準拠のデザイントークンと、それに沿った共通コンポーネント。

## インストール

```sh
pnpm add @vipelar/ui
```

peer dependencies:

| パッケージ            | 条件                              |
| --------------------- | --------------------------------- |
| `react` / `react-dom` | >= 19（必須）                     |
| `lucide-react`        | >= 1（`Alert`を使う場合のみ必須） |

## セットアップ

**importが2つ必要。** 役割が違うので、片方だけでは足りない。

| import                                 | 何のため                         | 省くと                           |
| -------------------------------------- | -------------------------------- | -------------------------------- |
| `@vipelar/ui/styles.css`（JS/TSXから） | uiコンポーネントの見た目         | コンポーネントが無スタイルになる |
| `@vipelar/ui/theme.css`（CSSから）     | 利用側で`bg-primary`等を書くため | 自分のクラスが無言で効かない     |

`main.tsx`等:

```tsx
import '@vipelar/ui/styles.css';
```

CSSエントリ:

```css
@import 'tailwindcss';
@import '@vipelar/ui/theme.css';
```

`theme.css`を省いてもコンポーネント自体は正しく表示されるので気づきにくい。Tailwindはユーティリティをビルド時に生成するため、利用側のビルドからも`@theme`が見えていないと`bg-primary`のようなクラスがCSSに出力されない。エラーは出ず、ただ無反応になる。

### 注意: `dark:`がクラス連動に変わる

`theme.css`には次が含まれる:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Tailwind既定の`dark:`は`prefers-color-scheme`連動だが、これにより`<html>`の`.dark`クラス連動に切り替わる。OS設定連動を前提にしているプロジェクトでは挙動が変わるので、テーマ切替時に`.dark`を付け外しすること。

## 使い方

```tsx
import { Heading, Text, Alert } from '@vipelar/ui';

export default function Page() {
  return (
    <>
      <Heading title="ようこそ" subtitle="サブタイトル" />
      <Text>本文テキスト。</Text>
      <Alert type="info">補足情報</Alert>
    </>
  );
}
```

## デザイントークン

値は`src/styles/theme.css`を参照。ここでは使える名前だけ挙げる。

### 色

- `primary` / `primary-50`〜`primary-950`
- `neutral-50`〜`neutral-950`
- `success` / `warning` / `danger` / `info`
- `vipelar` — ブランド固定色。テーマに依存しない

`success`等には`-bg`(面色)と`-text`(本文色)の派生がある:

```tsx
<div className="border border-warning bg-warning-bg text-warning-text">注意</div>
```

これらはライト/ダークの変種を持たない単一値なので、`dark:`を付けなければ**テーマによらず同じ配色**になる。アラートを常に高コントラストに保つための意図的な設計で、`Alert`と`Callout`がこれを使っている。`-text`は`-bg`の上でコントラスト比4.5:1以上を満たす。

### タイポグラフィ

`text-h1` / `text-h2` / `text-h3` / `text-h4` / `text-body` / `text-caption`

サイズと行間のみで**ウェイトを持たない**。`font-bold`と同じプロパティを争わせないためなので、太字は利用側で指定する:

```tsx
<h1 className="text-h1 font-bold">見出し</h1>
```

### 角丸

`rounded-input` / `rounded-button` / `rounded-card` / `rounded-badge`

pxを直書きせず役割で参照する。素の`rounded-sm`〜`rounded-xl`も定義しているが、コンポーネントにはロール名を使うこと。

### 影

`shadow-sm` / `shadow-md` / `shadow-lg` / `shadow-xl`

階層は dropdown(sm) < card(md) < modal(lg) < toast(xl)。

### スペーシング

名前付きトークンは**意図的に用意していない**。Tailwind既定の数値スケール(4pxグリッド)をそのまま使う。理由は`theme.css`のコメントを参照。

## ローカルで試す

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

**buildは必須。** `exports`が`dist/`を指しており`dist`はgitignore対象なので、クローン直後は存在しない。symlinkを張っただけではimportが壊れる。

**HMRは効かない。** 利用側が見るのは`dist`の成果物なので、`ui/src`を変更したら再ビルドが要る。作業中は`vite build --watch`を回しておくと楽。

**ui単体の`pnpm-lock.yaml`が取り残される。** 依存をworkspace経由で足すと、更新されるのは親側のlockfileだけ。uiのCIは`--frozen-lockfile`で走るため、ui側の依存を変えたら再生成すること:

```sh
pnpm install --ignore-workspace --lockfile-only
```

### 注意: React二重ロード対策

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
- `CodeBlock`
- `PropsTable`
- `Callout`

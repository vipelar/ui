# @vipelar/ui

## 使い方

`main.tsx`等でcssをimport
```tsx
import '@vipelar/ui/styles.css';
```

tsxで通常通りimprt
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

## ローカルでリンクして試す

publish前にローカルで直接参照して動作確認する場合

`package.json`
```json
{
  "dependencies": {
    "@vipelar/ui": "link:../ui"
  }
}
```

ui側build後、呼び出し側`pnpm install`:
```sh
# ui
pnpm build

# your project
pnpm install
```

`ui`側のソースを変更したら`pnpm build`を再実行すれば反映される。

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
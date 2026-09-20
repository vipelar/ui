import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, Field, Heading, Skeleton, Space, Text } from '../src/index';
import './playground.css';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-caption font-bold tracking-widest text-neutral-500 dark:text-neutral-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [name, setName] = useState('vipelar');
  const [pw, setPw] = useState('abc');

  document.documentElement.classList.toggle('dark', dark);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="mx-auto flex max-w-2xl flex-col gap-12 p-8">
        <div className="flex items-center justify-between">
          <Heading title="@vipelar/ui" subtitle="コンポーネントの目視確認用" />
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="h-fit shrink-0 rounded-button border border-neutral-200 px-3 py-1.5 text-caption text-neutral-900 dark:border-neutral-800 dark:text-neutral-50"
          >
            {dark ? 'ライトへ' : 'ダークへ'}
          </button>
        </div>

        <Section title="Field">
          <Field label="ユーザー名" value={name} onChange={(e) => setName(e.target.value)} />
          <Text size="sm" color="fade">
            state: {name || '(空)'}
          </Text>

          <Field
            label="パスワード"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            required
            autoComplete="current-password"
            hint="8文字以上"
            error={pw.length > 0 && pw.length < 8 ? '短すぎます' : undefined}
          />

          <Field label="明示ID" id="explicit-id" defaultValue="id を渡した場合" />
          <Field label="等幅" defaultValue="#7a79d7" className="font-mono" />
          <Field label="無効" defaultValue="編集できません" disabled />
        </Section>

        <Section title="Text">
          <Text size="xl">xl のテキスト</Text>
          <Text size="lg">lg のテキスト</Text>
          <Text>normal のテキスト</Text>
          <Text size="sm" color="fade">
            sm / fade のテキスト
          </Text>
          <Text color="red">red のテキスト</Text>
        </Section>

        <Section title="Alert">
          <Alert type="info">info のアラート</Alert>
          <Alert type="caution">caution のアラート</Alert>
          <Alert type="warn">warn のアラート</Alert>
        </Section>

        <Section title="Skeleton / Space">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Space size="lg" />
        </Section>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

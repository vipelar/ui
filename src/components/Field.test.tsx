import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Field from './Field';

describe('Field', () => {
  it('ラベルからinputを引ける', () => {
    render(<Field label="ユーザー名" />);
    expect(screen.getByLabelText('ユーザー名')).toBeInstanceOf(HTMLInputElement);
  });

  it('idを渡さなければ自動採番し、複数置いても衝突しない', () => {
    render(
      <>
        <Field label="ひとつめ" />
        <Field label="ふたつめ" />
      </>
    );
    const a = screen.getByLabelText('ひとつめ');
    const b = screen.getByLabelText('ふたつめ');
    expect(a.id).not.toBe('');
    expect(a.id).not.toBe(b.id);
  });

  it('idを渡せばそれを使う', () => {
    render(<Field label="明示" id="explicit-id" />);
    expect(screen.getByLabelText('明示')).toHaveAttribute('id', 'explicit-id');
  });

  it('hintだけならaria-describedbyがhintを指す', () => {
    render(<Field label="パスワード" hint="8文字以上" />);
    const input = screen.getByLabelText('パスワード');
    const ids = input.getAttribute('aria-describedby')!.split(' ');
    expect(ids).toHaveLength(1);
    expect(document.getElementById(ids[0])).toHaveTextContent('8文字以上');
  });

  it('errorでaria-invalidが立ち、エラー文が描画される', () => {
    render(<Field label="パスワード" error="短すぎます" />);
    const input = screen.getByLabelText('パスワード');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    const ids = input.getAttribute('aria-describedby')!.split(' ');
    expect(document.getElementById(ids[0])).toHaveTextContent('短すぎます');
  });

  it('hintとerrorが揃うとaria-describedbyが両方を指す', () => {
    render(<Field label="パスワード" hint="8文字以上" error="短すぎます" />);
    const input = screen.getByLabelText('パスワード');
    const ids = input.getAttribute('aria-describedby')!.split(' ');
    expect(ids).toHaveLength(2);
    expect(ids.every((id) => document.getElementById(id) !== null)).toBe(true);
    expect(document.getElementById(ids[0])).toHaveTextContent('8文字以上');
    expect(document.getElementById(ids[1])).toHaveTextContent('短すぎます');
  });

  it('errorが無ければaria-invalidもdescribedbyも付けない', () => {
    render(<Field label="ユーザー名" />);
    const input = screen.getByLabelText('ユーザー名');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).not.toHaveAttribute('aria-describedby');
  });

  it('input属性をそのまま渡す', () => {
    render(
      <Field
        label="パスワード"
        type="password"
        required
        autoComplete="current-password"
        placeholder="入力してください"
      />
    );
    const input = screen.getByLabelText('パスワード');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('autocomplete', 'current-password');
    expect(input).toHaveAttribute('placeholder', '入力してください');
  });

  it('disabledを渡せる', () => {
    render(<Field label="無効" disabled />);
    expect(screen.getByLabelText('無効')).toBeDisabled();
  });

  it('classNameはラッパーではなくinputに載る', () => {
    const { container } = render(<Field label="等幅" className="font-mono" />);
    expect(screen.getByLabelText('等幅')).toHaveClass('font-mono');
    expect(container.firstElementChild).not.toHaveClass('font-mono');
  });

  it('errorの有無で枠の色クラスが入れ替わる', () => {
    const { rerender } = render(<Field label="ユーザー名" />);
    expect(screen.getByLabelText('ユーザー名')).not.toHaveClass('border-danger');
    rerender(<Field label="ユーザー名" error="だめ" />);
    expect(screen.getByLabelText('ユーザー名')).toHaveClass('border-danger');
  });
});

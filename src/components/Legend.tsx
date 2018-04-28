import * as React from 'react';

const mark = (s: string) => <td className='mark'>{s}</td>;
const check = mark('✓');
const cross = mark('✗');
const example = (stopName: string) => (className: string) => <td className={className}>{stopName}</td>;

interface Props {
  stopName: string;
}

export const Legend = ({ stopName }: Props) => {
  const ex = example(stopName);
  return (
    <table>
      <thead>
        <tr>
          <td colSpan={3}>
            Legenda
        </td>
        </tr>
        <tr>
          <td>Rejstřík zapnut</td>
          <td>Rejstřík nastaven v paměti</td>
          <td>Styl</td>
        </tr>
      </thead>
      <tbody>
        <tr>{check}{check}{ex('stop-on-on')}</tr>
        <tr>{check}{cross}{ex('stop-on-off')}</tr>
        <tr>{cross}{check}{ex('stop-off-on')}</tr>
        <tr>{cross}{cross}{ex('stop-off-off')}</tr>
      </tbody>
    </table>
  );
};

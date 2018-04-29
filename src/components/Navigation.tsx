import * as React from 'react';

const key = (s: string) => <td className='key'>{s}</td>;

export const Navigation = () => (
  <table>
    <thead>
      <tr><td colSpan={3}>Navigace</td></tr>
      <tr><td>Klávesa</td><td>Mnemo</td><td>Akce</td></tr>
    </thead>
    <tbody>
      <tr>{key('▻')}<td>–</td><td>Následující kombinace</td></tr>
      <tr>{key('◅')}<td>–</td><td>Předchozí kombinace</td></tr>
      <tr>{key('S')}<td>Save</td><td>Uložení zapnutých rejstříků do paměti</td></tr>
      <tr>{key('L')}<td>Load</td><td>Načtení rejstříků uložených v paměti</td></tr>
      <tr>{key('0')}<td>Zero</td><td>Vypnutí všech rejstříků</td></tr>
      <tr>{key('A')}<td>All</td><td>Zapnutí všech rejstříků</td></tr>
    </tbody>
  </table>
);

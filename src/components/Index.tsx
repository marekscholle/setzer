import { List, Repeat } from 'immutable';
import * as React from 'react';

export interface Props {
  index: number;
  count: number;
  onChange: (position: number) => void;
}

interface DigitProps {
  value: number;
  onChange: (digit: number) => void;
}

const Digit = ({ value, onChange }: DigitProps) => (
  <input
    type='number'
    onChange={e => onChange(Number(e.target.value))}
    value={value}
  />
);

/**
 * Number digits in [0..9] from least significant digit.
 */
function number2digits(n: number): List<number> {
  function loop(m: number, acc: List<number>): List<number> {
    if (m === 0) {
      return acc;
    } else {
      const r = m % 10;
      return loop((m - r) / 10, acc.push(r));
    }
  }
  return loop(n, List());
}

/**
 * Number from pseudodigits from [-1..10].
 */
function pseudodigits2number(digits: List<number>): number {
  function loop(list: List<number>, pow: number, acc: number): number {
    if (list.isEmpty()) {
      return acc;
    } else {
      const digit = list.first()!;
      return loop(list.rest(), pow * 10, acc + pow * digit);
    }
  }
  return loop(digits, 1, 0);
}

export const Index = ({ index, count, onChange }: Props) => {
  const indexDigits = number2digits(index);
  const digits = indexDigits.concat(Repeat(0, number2digits(count - 1).size - indexDigits.size).toList());
  return (
    <span>
      {digits
        .map((digit, ix) => (
          <Digit
            key={ix}
            value={digit}
            onChange={d => onChange(pseudodigits2number(digits.set(ix, d)))}
          />
        ))
        .reverse()}
    </span>
  );
};

export const EmptyStop = () => <td />;

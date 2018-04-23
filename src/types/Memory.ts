import { List, Range, Repeat } from 'immutable';

import { Combination } from './Combination';

const ByteSize = 8;

export class Memory {
  static empty(count: number, size: number): Memory {
    const empty = Combination.empty(size);
    return new Memory(Repeat(empty, count).toList());
  }

  static fromBytes(bytes: Uint8Array, count: number, size: number): Memory {
    const comb = (index: number) => {
      const offset = index * (size / ByteSize);

      return new Combination(
        Range(offset, offset + (size / ByteSize)).flatMap((byte: number) =>
          Range(0, ByteSize).map((bit: number) => (
            // tslint:disable-next-line:no-bitwise
            (byte & (1 << bit)) !== 0
          )),
        ).toList(),
      );
    };

    return new Memory(Range(0, count).map(comb).toList());
  }

  constructor(readonly combinations: List<Combination>) {
    this.combinations = combinations;
  }

  toBytes(memory: Memory): Uint8Array {
    const bytes = new Uint8Array(memory.count * (memory.size / ByteSize));

    memory.combinations.forEach((comb: Combination, index: number) => {
      const offset = index * (memory.size / ByteSize);
      comb.stops.forEach((stop: boolean, ix: number) => {
        if (stop) {
          const off = offset + (ix / ByteSize);
          // tslint:disable-next-line:no-bitwise
          bytes[off] = (bytes[off] | (1 << (ix % ByteSize)));
        }
      });
    });

    return bytes;
  }

  updated(index: number, combination: Combination): Memory {
    return new Memory(this.combinations.set(index, combination));
  }

  switched(index: number, stopIndex: number): Memory {
    return this.updated(index, this.combinations.get(index).switched(stopIndex));
  }

  get size(): number {
    return this.combinations.first().stops.size;
  }

  get count(): number {
    return this.combinations.size;
  }
}

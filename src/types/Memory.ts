import { List, Range, Repeat } from 'immutable';

import { Combination } from './Combination';

const ByteSize = 8;

export class Memory {
  static empty(count: number, size: number): Memory {
    const empty = Combination.empty(size);
    return new Memory(Repeat(empty, count).toList());
  }

  static fromBytes(bytes: Uint8Array, count: number, size: number): Memory {
    const combination = (index: number) => {
      const offset = index * (size / ByteSize);

      return new Combination(
        Range(offset, offset + (size / ByteSize)).flatMap(byte =>
          Range(0, ByteSize).map(bit => (
            // tslint:disable-next-line:no-bitwise
            (byte & (1 << bit)) !== 0
          )),
        ).toList(),
      );
    };

    return new Memory(Range(0, count).map(combination).toList());
  }

  constructor(readonly combinations: List<Combination>) {
    this.combinations = combinations;
  }

  toBytes(size: number): Uint8Array {
    const bytes = new Uint8Array(this.count * (size / ByteSize));
    this.combinations.forEach((combination, index) => {
      const offset = index * size / ByteSize;
      combination.stops.forEach((stop, ix) => {
        if (stop) {
          const off = offset + Math.floor(ix / ByteSize);
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
    return this.updated(index, this.combinations.get(index)!.switched(stopIndex));
  }

  get size(): number {
    return this.combinations.first()!.stops.size;
  }

  get count(): number {
    return this.combinations.size;
  }
}

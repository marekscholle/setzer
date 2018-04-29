import * as React from 'react';

interface Props {
  onLoad: (file: File) => void;
}

export const Load = ({ onLoad }: Props) => (
  <div>
    <span>Load from file: </span>
    <input
      type='file'
      onChange={e => onLoad(e.target.files![0])}
    />
  </div>
);

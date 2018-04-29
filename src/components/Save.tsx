import * as React from 'react';

interface Props {
  onSave: () => void;
}

export const Save = ({ onSave }: Props) => (
  <div>
    <span>Save to file: </span>
    <button
      onClick={onSave}
    >
      Save
    </button>
  </div>
);

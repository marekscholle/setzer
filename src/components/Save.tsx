import * as React from 'react';

interface Props {
  onSave: () => void;
}

export const Save = ({ onSave }: Props) => (
  <div
    onClick={onSave}
  >
    Save
  </div>
);

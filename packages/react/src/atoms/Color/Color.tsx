import React from 'react';

interface ColorProps {
  hexCode: string;
  width: string;
  height: string;
}

function Color({ hexCode, width, height }: ColorProps) {
  return <div style={{ backgroundColor: hexCode, width, height }}></div>;
}

export default Color;

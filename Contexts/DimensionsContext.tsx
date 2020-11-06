import React, {createContext, useState} from 'react';
import {useWindowDimensions} from 'react-native';

interface IDimensionContext {
  width: number;
  height: number;
}

export const DimensionsContext = createContext<IDimensionContext>();

export function DimensionsContextProvider(props) {
  const [dimensions, setDimensions] = useState(useWindowDimensions());
  return (
    <DimensionsContext.Provider
      {...props}
      value={{...dimensions, setDimensions}}
    />
  );
}

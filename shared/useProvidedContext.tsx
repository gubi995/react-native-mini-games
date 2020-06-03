import React from 'react';

export const useProvidedContext = <T extends unknown>(context: React.Context<T>) => {
  const contextValue = React.useContext<T>(context);
  const isContextProvided = Object.keys(context).length > 0;

  if (!isContextProvided) {
    throw new Error(`${context.displayName} is not provided`);
  }

  return contextValue;
};

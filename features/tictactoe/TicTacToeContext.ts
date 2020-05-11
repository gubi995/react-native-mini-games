import { createContext } from 'react';

import { State } from './reducer';

const TicTacToeContext = createContext({ state: {} as State, dispatch: (value: any) => {} });

export default TicTacToeContext;

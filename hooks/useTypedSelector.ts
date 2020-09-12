import {RootState} from '../store/rootReducer';
import {useSelector} from 'react-redux';

//try and change rootstate to something more private
const useTypedSelector = <T>(selector: (state: RootState) => T) => {
  const state = useSelector(selector);

  return state;
};

export {useTypedSelector};

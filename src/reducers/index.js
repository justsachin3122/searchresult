import { combineReducers } from 'redux';
import pokemons from './pokemons';
import filter from './filter';
import filterName from './filtername';
import message from './message';
import loading from './loading';
const combinedReducer = combineReducers({
  pokemons,
  filter,
  filterName,
  message,
  loading,
});

export default combinedReducer;

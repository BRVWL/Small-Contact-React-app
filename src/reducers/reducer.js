import { combineReducers } from 'redux';
import messagesReduser from './messagesReduser';
import peopleReduser from './peopleReduser';

export default combineReducers({ messagesReduser, peopleReduser });

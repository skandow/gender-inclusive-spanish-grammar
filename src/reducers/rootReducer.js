import userReducer from './userReducer'
import quizScoresReducer from './quizScoresReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    user: userReducer,
    quizScores: quizScoresReducer
})

export default rootReducer
export default function quizScoresReducer(
    state = [],
    action) {
        switch (action.type) {
            case "SAVE_QUIZ_SCORES":
                state = [...action.quizScores]
                return state
            case "DELETE_QUIZ_SCORES":
                return []
        default:
            return state
    }
}
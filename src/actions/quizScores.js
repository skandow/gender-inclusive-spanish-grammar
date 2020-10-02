export const saveQuizScores = quizScores => {
    return {
        type: "SAVE_QUIZ_SCORES",
        quizScores
    }
}

export const deleteQuizScores = () => {
    return {
        type: "DELETE_QUIZ_SCORES"
    }
}
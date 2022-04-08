const shuffleAnswers = (answers:Array<string>) => {
  if(answers.length > 1) {
    const shuffledAnswers = answers
      .map(answer => ({_id: Math.random(), value: answer}))
      .sort((a,b) => a._id - b._id)
      .map(obj => obj.value)
    
    return shuffledAnswers
  } else {
    throw new Error("Array of answers must contain at least 2 elements")
  }
}

export default shuffleAnswers

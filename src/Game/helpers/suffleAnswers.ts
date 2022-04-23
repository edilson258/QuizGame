const shuffleAnswers = (answers:Array<string>) => {
  if(answers.length < 2)
    throw new Error("Array of answers must contain at least 2 elements")
  
  const shuffledAnswers = answers
    .map(answer => ({_id: Math.random(), value: answer})) // giving ids
    .sort((a,b) => a._id - b._id) // sorting by given ids
    .map(obj => obj.value) // returning values without ids
  
  return shuffledAnswers
}

export default shuffleAnswers

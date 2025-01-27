// script.js
document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  let score = 0;
  
  // Correct answers mapping
  const correctAnswers = {
    q1: 'c', q2: 'b', q3: 'b', q4: 'c', q5: 'b', q6: 'c', q7: 'c', q8: 'b',
    q9: 'a', q10: 'c', q11: 'c', q12: 'a', q13: 'b', q14: 'b', q15: 'c',
    q16: 'b', q17: 'b', q18: 'c', q19: 'a', q20: 'c'
  };

  // Loop through each question to check answers
  for (let i = 1; i <= 20; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === correctAnswers[`q${i}`]) {
      score++;
    }
  }

  // Display results
  const result = document.getElementById('result');
  if (score >= 16) {
    result.textContent = `Excellent knowledge of precious metals vocabulary! Your score is: ${score}/20`;
  } else if (score >= 11) {
    result.textContent = `Good understanding, but you could review a few terms. Your score is: ${score}/20`;
  } else if (score >= 6) {
    result.textContent = `You have a basic grasp, but more study is needed. Your score is: ${score}/20`;
  } else {
    result.textContent = `It's a great time to dive deeper into the world of precious metals! Your score is: ${score}/20`;
  }
});

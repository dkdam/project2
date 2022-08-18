import React from "react";
import Quiz from "./Quiz";

const QuizForm = () => {
  return (
    <><>
          <div>
              <h1>Host a quiz</h1>
              <h4>Take on the role as host, and create an event with both locations and quizzes. Who will come out on top?</h4>


              <img src="https://www.geoguessr.com/_next/static/images/onboarding-1-2x-58eaef4035cf1e4155cdbd187a530895.png" alt="globe picture" />
              <h2>Host your own game show</h2>
              <h4>Create custom quiz games and invite up to 1000 people</h4>
          </div>
      </><>
              <div>
                  <img src="https://www.geoguessr.com/_next/static/images/onboarding-2-2x-45f377de5546d7a29c49c5c5202a0cf2.png" alt="thumbs up" />
                  <h2>No account needed</h2>
                  <h4>Anyone can join with any device in a matter of seconds.</h4>
              </div>
          </><>
              <div>
                  <img src="https://www.geoguessr.com/_next/static/images/onboarding-3-2x-95a89d5b0cb37f58ee54bf5a165986bd.png" alt="messege" />
                  <h2>Customize the quiz</h2>
                  <h4>Add fun questions or pick particular locations around the world.</h4>
              </div>
          </><button Link className="text-3xl text-yellow-500 hover:text-orange-700" to="/Quiz" >Create Quiz</button></>
    
    
  );
};

export default QuizForm;

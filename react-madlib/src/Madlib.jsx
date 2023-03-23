import { useState } from "react";
import MadlibForm from "./MadlibForm";

function Madlib() {
  const [story, setStory] = useState("");

  function makeStory(formData) {
    // sets the story in state based on formdata passed from the child form
    setStory(
      `There was a ${formData.color} ${formData.noun} who loved to go to the beach with a ${formData.adjective} ${formData.noun2}`
    );
  }
  return (
    <div>
      {story === "" ? <MadlibForm makeStory={makeStory} /> : <h1>{story}</h1>}
    </div>
  );
}

export default Madlib;

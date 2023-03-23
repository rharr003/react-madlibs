import { useState, useRef, useEffect } from "react";
function MadlibForm({ makeStory }) {
  const initialState = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    // checks to see if the form is filled to enable or disable submit button
    const isFilledOut = Object.values(formData).every((value) => value !== "");
    submitButton.current.disabled = !isFilledOut;
  }, [formData]);

  const submitButton = useRef();

  function handleSubmit(e) {
    // handles submission with function passed down from parent to update parent state
    e.preventDefault();
    makeStory(formData);
  }

  return (
    <form>
      {Object.keys(formData).map((value) => (
        <div>
          <input
            name={value}
            placeholder={value}
            value={formData[value]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button onClick={handleSubmit} disabled ref={submitButton}>
        Get Story
      </button>
    </form>
  );
}

export default MadlibForm;

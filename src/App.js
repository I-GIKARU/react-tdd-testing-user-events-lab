import { useState } from "react";

function App() {
  // State management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    frontend: false,
    backend: false,
    design: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle checkbox changes
  const handleInterestChange = (e) => {
    const { name, checked } = e.target;
    setInterests({
      ...interests,
      [name]: checked
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Get selected interests for the success message
  const getSelectedInterests = () => {
    const selected = Object.keys(interests).filter(key => interests[key]);
    
    if (selected.length === 0) {
      return "no specific areas";
    }
    
    return selected.map(interest => 
      interest.charAt(0).toUpperCase() + interest.slice(1)
    ).join(", ");
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <section>
        <h2>Newsletter Signup</h2>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <fieldset>
              <legend>Areas of Interest:</legend>
              
              <div>
                <input
                  type="checkbox"
                  id="frontend"
                  name="frontend"
                  checked={interests.frontend}
                  onChange={handleInterestChange}
                />
                <label htmlFor="frontend">Frontend Development</label>
              </div>
              
              <div>
                <input
                  type="checkbox"
                  id="backend"
                  name="backend"
                  checked={interests.backend}
                  onChange={handleInterestChange}
                />
                <label htmlFor="backend">Backend Development</label>
              </div>
              
              <div>
                <input
                  type="checkbox"
                  id="design"
                  name="design"
                  checked={interests.design}
                  onChange={handleInterestChange}
                />
                <label htmlFor="design">Design</label>
              </div>
            </fieldset>
            
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>Thanks for signing up, {name}!</p>
            <p>You've expressed interest in: {getSelectedInterests()}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

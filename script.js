// Fetch and display a daily inspirational quote
async function fetchQuote() {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      const quote = data[0].q;
      const author = data[0].a;
      document.getElementById('quote').innerText = `"${quote}" - ${author}`;
    } catch (error) {
      document.getElementById('quote').innerText = "Could not load quote.";
      console.error("Error fetching quote:", error);
    }
  }
  
  // Call the function to load a quote when the page loads
  fetchQuote();
  
  // Form submission alert
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form submitted! This is where you'd connect to an API.");
  });
  
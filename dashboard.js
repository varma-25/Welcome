// Live Clock
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  
  // Fetch Dynamic Data
  document.getElementById("fetch-data").addEventListener("click", async () => {
    const dataList = document.getElementById("data-list");
    dataList.innerHTML = "<li>Loading...</li>"; // Show loading
    try {
      // Simulate an API call
      const data = await new Promise((resolve) =>
        setTimeout(() => resolve(["Item 1", "Item 2", "Item 3"]), 1000)
      );
      dataList.innerHTML = data.map((item) => `<li>${item}</li>`).join("");
    } catch {
      dataList.innerHTML = "<li>Error fetching data</li>";
    }
  });
  
  // Handle Form Submission
  document.getElementById("interactive-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("user-name").value;
    const output = document.getElementById("form-output");
    output.textContent = `Hello, ${userName}!`;
    document.getElementById("interactive-form").reset();
  });
  
  // Logout
  document.getElementById("logout-btn").addEventListener("click", () => {
    alert("You have been logged out!");
    window.location.href = "index.html"; // Redirect to login page
  });
  
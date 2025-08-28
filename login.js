document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const { data, error } = await window.db
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      alert("❌ Invalid email or password");
      return;
    }

    // Save user to session
    sessionStorage.setItem("user", JSON.stringify(data));

    // Redirect based on role
    if (data.role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else if (data.role === "teacher") {
      window.location.href = "teacher-dashboard.html";
    } else if (data.role === "student") {
      window.location.href = "student-dashboard.html";
    } else {
      alert("Unknown role, contact admin");
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("⚠️ Something went wrong, try again later.");
  }
});

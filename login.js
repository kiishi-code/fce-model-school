document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password) // ⚠️ plain text for now
      .single();

    if (error || !data) {
      alert("❌ Invalid email or password");
      return;
    }

    // Save user session
    sessionStorage.setItem("user", JSON.stringify(data));

    // Redirect based on role
    switch (data.role) {
      case "admin":
        window.location.href = "admin-dashboard.html";
        break;
      case "teacher":
        window.location.href = "teacher-dashboard.html";
        break;
      case "student":
        window.location.href = "student-dashboard.html";
        break;
      default:
        alert("⚠️ Unknown role, contact admin");
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("⚠️ Something went wrong, try again later.");
  }
});

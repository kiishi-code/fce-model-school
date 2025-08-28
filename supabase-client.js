const SUPABASE_URL = "https://wzjwmpdzrusvlhfblxjh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6andtcGR6cnVzdmxoZmJseGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MDQxNDcsImV4cCI6MjA3MTk4MDE0N30.hCJ6Lo_nktaqW7UG8Na8rC2dwRz34x4UZRJYlrjYXrg";

// ✅ Safe variable name (no conflict)
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.db = db;

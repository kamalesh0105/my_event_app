const { createClient } = require("@supabase/supabase-js");
console.log(process.env.backend);
const supabaseUrl = "https://efiunykwbpioulrtzkdx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmaXVueWt3YnBpb3VscnR6a2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MjY1ODcsImV4cCI6MjAyOTEwMjU4N30.XXucGQG23M4GUW7j0okAjaIsJ7mLSsMTTmfc3CFCXDA";
const supabaseClient = createClient(supabaseUrl, supabaseKey);
// console.log("supabase");
module.exports = supabaseClient;

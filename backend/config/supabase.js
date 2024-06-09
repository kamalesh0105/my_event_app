const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
dotenv.config();

const supabaseUrl = process.env.SUPABASEURL;
const supabaseKey = process.env.SUPABASEKEY;
// console.log(supabaseKey + supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;

const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
dotenv.config();

const supabaseUrl = process.env.SUPABASEURL;
const supabaseKey = process.env.SUPABASEKEY;
const supabase = createClient(supabaseUrl, supabaseKey);
// const dt = async () => {
//   const { data, error } = await supabase.auth.admin.listUsers();
//   console.log(data);
// };
// dt();
// console.log(supabase);
module.exports = supabase;

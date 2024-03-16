// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dkhpnhdpniqygqzuhiga.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRraHBuaGRwbmlxeWdxenVoaWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MzQ2OTQsImV4cCI6MjAyNTAxMDY5NH0.GWuJvmu3v9-X-NXZIsFt0hz1OvOJ-4nZaSCqCA98DgE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

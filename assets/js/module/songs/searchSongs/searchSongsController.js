import { supabase } from "../../supabase/supabase.js";
export async function searchItem(item) {
  console.log(item);

  const { data, error } = await supabase
    .from("songs")
    .select()
    .textSearch("title", `'${item}'`, {
      type: "websearch",
      cinfig: "english",
    });

  console.log(data);
}

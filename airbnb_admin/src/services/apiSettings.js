import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("설정을 가져올 수 없습니다.");
  }
  return data;
}

export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)

    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("설정이 업데이트될 수 없습니다.");
  }
  return data;
}

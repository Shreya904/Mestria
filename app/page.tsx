import { redirect } from "next/navigation";

export default function Page() {
  // Default to English locale — redirect homepage to localized route
  redirect("/en");
}

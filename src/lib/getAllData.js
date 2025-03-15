export default async function AllData() {
  const response = await fetch("blogs.json");
  return response.json();
}

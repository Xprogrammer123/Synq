export const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let data: any;
  try {
    data = await res.json();
  } catch {
    data = await res.text();
  }

  if (!res.ok) throw new Error(data?.error || data || "Request failed");
  return data;
}

export default apiFetch;
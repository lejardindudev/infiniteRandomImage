// TODO: supprimer ce hook
import { useState, useEffect } from "react";
export default function useApiUrl(page, limit) {
  const [apiUrl, setApiUrl] = useState("");
  useEffect(() => {
    setApiUrl(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  }, []);
  return apiUrl;
}

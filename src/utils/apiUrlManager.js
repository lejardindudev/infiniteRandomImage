export default function apiUrlManager(page, limit) {
  const apiUrl =`https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  return apiUrl;
}
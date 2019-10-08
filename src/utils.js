export const generateID = () => {
  const symbols =
    'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';

  let id = '';
  for (let i = 0; i < 16; i++) {
    const idx = Math.floor(Math.random() * symbols.length);
    id += symbols[idx];
  }

  return id;
};

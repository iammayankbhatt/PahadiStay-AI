import { homestays } from "../data/homestays.js";

export const getAllHomestays = () => homestays;

export const getHomestayById = (id) =>
  homestays.find((h) => h.id === Number(id));

export const searchHomestays = (query) => {
  return homestays.filter(
    (h) =>
      h.name.toLowerCase().includes(query.toLowerCase()) ||
      h.location.toLowerCase().includes(query.toLowerCase())
  );
};

export const createHomestay = (data) => {
  const newHomestay = {
    id: homestays.length + 1,
    ...data,
  };

  homestays.push(newHomestay);

  return newHomestay;
};

export const updateHomestay = (id, data) => {
  const index = homestays.findIndex(
    (h) => h.id === Number(id)
  );

  if (index === -1) return null;

  homestays[index] = {
    ...homestays[index],
    ...data,
  };

  return homestays[index];
};

export const deleteHomestay = (id) => {
  const index = homestays.findIndex(
    (h) => h.id === Number(id)
  );

  if (index === -1) return false;

  homestays.splice(index, 1);

  return true;
};
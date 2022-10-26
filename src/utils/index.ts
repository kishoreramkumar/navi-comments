export const noop = () => {};

export const getCurrentTimestamp = () => {
  return new Date().getTime();
};

export const getUniqueId = () => {
  return Math.random().toString(36) + getCurrentTimestamp();
};

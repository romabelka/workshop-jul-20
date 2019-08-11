export const arrToMap = arr =>
  arr.reduce((acc, el) => {
    acc[el.id] = el;
    return acc;
  }, {});

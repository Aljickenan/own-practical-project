export const nameOfArrey = function (arrey) {
  return arrey.map(function (e) {
    return e.name;
  });
};

export const screenshotsOfArrey = function (arrey) {
  return arrey.map(function (e) {
    return e.image;
  });
};

export const platformsOfArrey = function (arrey) {
  return arrey.map((e) => {
    return e.platform.name;
  });
};

export const storesOfArrey = function (arrey) {
  return arrey.map((e) => {
    return e.store.name;
  });
};

export const tagsOfArrey = function (arrey) {
  return arrey.map((e) => {
    return {
      id: e.id,
      name: e.name,
    };
  });
};

function selectChangedFields<O, C>(org: O, chng: C) {
  const result: { [key: string]: string } = {};
  const original = org as { [key: string]: string };
  const changed = chng as { [key: string]: string };
  Object.keys(changed as { [key: string]: string }).forEach(([key]) => {
    if (original[key] !== changed[key]) {
      result[key] = changed[key];
    }
  });
  return result as Partial<C>;
}

export default selectChangedFields;

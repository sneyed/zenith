export const getArgTypes = arr => {
  let argTypes = {};
  arr.forEach(({ name, description, type, control }) => {
    argTypes[name] = {
      name,
      description,
      table: {
        type: {
          summary: type || "string",
        },
      },
      control: control || { type: "text" },
    };
  });
  return argTypes;
};

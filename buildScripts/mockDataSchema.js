export const schema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",

            minimum: 1,
          },
          firstName: {
            type: "string",
            faker: "name.firstName",
          },
          lastName: {
            type: "string",
            faker: "name.lastName",
          },
        },
        required: ["id", "firstName", "lastName"],
      },
    },
  },
  required: ["users"],
};

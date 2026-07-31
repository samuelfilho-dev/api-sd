const { z } = require("zod");

const squireSchema = z.object({
  firstName: z.string().min(1, { message: "O nome é obrigatório" }),
  lastName: z.string().min(1, { message: "O sobrenome é obrigatório" }),
  email: z.string().email({ message: "O email deve ser válido" }),
  password: z.string().optional(),
});

module.exports = squireSchema;

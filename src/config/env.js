const { z } = require("zod");

require("dotenv").config({
    debug: false,
    quiet: true,
});

const envSchema = z.object({
  PORT: z.coerce.number().int().positive(),
  MONGO_URI: z.string().min(1),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment variables:", z.treeifyError(parsed.error));
  process.exit(1);
}

const config = {
  port: parsed.data.PORT,
  mongoURI: parsed.data.MONGO_URI,
  nodeEnv: parsed.data.NODE_ENV,
};

module.exports = config;

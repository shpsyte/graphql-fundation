import "reflect-metadata";

import path from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "./src/resolvers/UseResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });
  const { url } = await server.listen(4000);
  // console.log({ url });
}

main();

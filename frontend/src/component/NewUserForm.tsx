import { useMutation } from "@apollo/client";
import { useState } from "react";

import { gql } from "@apollo/client";
import { GET_USER } from "../lib/getUser";

const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

export function NewUserForm() {
  const [name, setName] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) return;

    const a = await createUser({
      variables: { name },
      update: (cache, { data: { createUser } }) => {
        const { users } = cache.readQuery({ query: GET_USER }) as any;
        cache.writeQuery({
          query: GET_USER,
          data: { users: [...users, createUser] },
        });
      },
      // refetchQueries: [GET_USER],
    });
    setName("");

    console.log({ a });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Create User</button>
    </form>
  );
}

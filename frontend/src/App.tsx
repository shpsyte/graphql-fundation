import { useQuery } from "@apollo/client";
import { GET_USER } from "./lib/getUser";
import { NewUserForm } from "./component/NewUserForm";

function App() {
  const { data, loading } = useQuery(GET_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NewUserForm />
      <div>
        <ul>
          {data.users.map((user: { id: string; name: string }) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

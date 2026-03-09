export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  console.log(users);
  return (
    <>
      <h1>Cabins Page</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

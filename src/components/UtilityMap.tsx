import { Each } from "./Each";

export const UtilityMap = () => {
  interface User {
    name: string;
    location: string;
  }

  const users: User[] = [
    {
      name: "anis 1",
      location: "abc 1",
    },
    {
      name: "anis 2",
      location: "abc 2",
    },
    {
      name: "anis 3",
      location: "abc 3",
    },
  ];
  return (
    <>
      <ul>
        <Each
          of={users}
          render={(user: any, index: number) => (
            <li key={index}>
              <h4>{user.name}</h4>
              <h4>{user.location}</h4>
            </li>
          )}
        ></Each>
      </ul>
      {/* <ul>
          <hr />
          {users.map((user, index) => (
              <li key={index}>
              <h4>{user.name}</h4>
              <h4>{user.location}</h4>
              </li>
              ))}
          </ul> */}
    </>
  );
};

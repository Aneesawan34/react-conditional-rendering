import { Children } from "react";

interface User {
  name: string;
  location: string;
}

export const Each = ({ render, of }: { render: Function; of: User[] }) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};

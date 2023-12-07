import { Age } from "./Age";

// eslint-disable-next-line react/prop-types
export function Welcome({ name }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>{<Age age={20} />}</p>
    </div>
  );
}

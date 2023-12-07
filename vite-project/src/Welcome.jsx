import { Age } from "./Age";

// eslint-disable-next-line react/prop-types
export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <p>
        <Age age={age} />
      </p>
    </div>
  );
}

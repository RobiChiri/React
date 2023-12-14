import { Color } from "./Color";

// eslint-disable-next-line react/prop-types
export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

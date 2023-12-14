// eslint-disable-next-line react/prop-types
export function Color({ color }) {
  return <li key={color.id}>{color.name}</li>;
}

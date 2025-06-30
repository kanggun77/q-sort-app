export function Select({ children, onValueChange }) {
  return <select onChange={e => onValueChange(e.target.value)} className="border p-2 rounded w-full">{children}</select>;
}
export function SelectTrigger({ children }) {
  return <div>{children}</div>;
}
export function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>;
}
export function SelectContent({ children }) {
  return <div>{children}</div>;
}
export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

// type CountProps = {
//   count: number;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// };
interface CountProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  total: (number1: number, number2: number) => number;
}
function Count({ count, setCount, total }: CountProps) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <br />
      {total(1, 2)}
    </div>
  );
}
export default Count;

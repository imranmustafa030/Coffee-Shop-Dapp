import { useState, useEffect } from "react";

const Memos = ({ memosState }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = memosState;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div className="">
      <div className="p-2 mt-10 bg-gray-900  flex align-middle justify-center">
        <h1 className="text-3xl text-white font-bold text-center px-5">Paid For Coffee</h1>
      </div>
      <div>
      {memos.map((memo) => {
        return (
          <table key={memo.timestamp} className="w-full font-serif bg-gray-100 ">
            <tbody >
                <tr className="">
                    <td className="p-5 ">{memo.name}</td>
                    <td>{memo.message}</td>
                    <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                    <td>{memo.from}</td>
                </tr>
            </tbody>
          </table>
        );
      })}
      </div>
      <div className="mb-10"></div>
    </div>
  );
};

export default Memos;

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface TableProps {
  data: {
    name: string;
    type: string;
    date: string;
    link: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(5);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <div className="bg-secondary rounded-3xl p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="py-2">Nome</th>
            <th className="py-2">Tipo</th>
            <th className="py-2">Data</th>
            <th className="py-2">Ação</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleItems).map((item, index) => (
            <tr key={index} className="text-white border-b border-gray-700">
              <td className="py-2 flex items-center gap-2">
                <span role="img" aria-label="icon">
                  🎮
                </span>
                {item.name}
              </td>
              <td className="py-2">{item.type}</td>
              <td className="py-2">{item.date}</td>
              <td className="py-2">
                <Link
                  to={item.link}
                  className="text-blue-400 hover:text-blue-600"
                >
                  Detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleItems < data.length && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={loadMore}
            className="bg-[#068FFF] text-white font-bold px-10 py-3 rounded hover:bg-blue-600 "
          >
            Carregar Mais
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;

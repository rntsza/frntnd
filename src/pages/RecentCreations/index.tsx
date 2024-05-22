import React, { useState } from "react";
import Table from "../../components/ui/Table";
import Filter from "../../components/ui/Filter";

const RecentCreations: React.FC = () => {
  const [filter, setFilter] = useState<string>("Filtre pelo tipo de documento");

  const filterOptions = ["Filtre pelo tipo de documento", "Documento", "Orientação"];

  const data = [
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },
    {
      name: "Analise do Pedro",
      type: "Documento",
      date: "26/07/2024",
      link: "/detalhes/1",
    },
    {
      name: "IA Judicial",
      type: "Orientação",
      date: "26/07/2024",
      link: "/detalhes/2",
    },

  ];

  const filteredData =
    filter === "Filtre pelo tipo de documento" ? data : data.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className='flex justify-between'>
        <h2 className="text-white text-xl mb-4">Últimas Criações</h2>
        <Filter
          filterOptions={filterOptions}
          selectedOption={filter}
          onFilterChange={setFilter}
        />
      </div>
      <Table data={filteredData} />
    </div>
  );
};

export default RecentCreations;

import Card from "../../components/ui/Card";

const ModelCarousel: React.FC = () => {
  const cardsData = [
    {
      key: "novo-documento",
      title: "Novo Documento",
      description: "Crie documentos personalizados trabalhistas, criminais e de direito do entretenimento com agilidade e precisão.",
      linkText: "Saiba mais",
      link: "/novo-documento"
    },
    {
      key: "analise-de-documentos",
      title: "Análise de Documentos",
      description: "Obtenha insights detalhados e recomendações precisas para seus casos.",
      linkText: "Ver detalhes",
      link: "/analise-de-documentos"
    },
    {
      key: "ia-juridica",
      title: "Fale com a IA Jurídica",
      description: "Receba orientações personalizadas sobre perguntas jurídicas, medidas cabíveis, audiências e mais.",
      linkText: "Ver detalhes",
      link: "/ia-juridica"
    },
    {
      key: "modelos-clientes",
      title: "Modelos e Clientes",
      description: "Simplifique sua gestão jurídica com modelos personalizados e informações de clientes integradas.",
      linkText: "Ver detalhes",
      link: "/modelos-clientes"
    }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {cardsData.map((card) => (
        <Card
          key={card.key}
          title={card.title}
          description={card.description}
          linkText={card.linkText}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ModelCarousel;

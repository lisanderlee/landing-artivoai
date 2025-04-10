import WorkflowCard from "../components/WorflowCard";
import TitleSection from "../components/TitleSectionContent";
export default function Workflows() {
  return (
    <>
      <div className="relative bg-black py-36">
        <TitleSection
          title="Explora nuestros workflows"
          color="white"
          headline="Workflows especializados para potenciar tu flujo de trabajo."
          description="Escribe prompts, navega y accede a todas las herramientas en español, con soporte en tu idioma cuando lo necesites."
        />
        <WorkflowCard />
        <WorkflowCard />
      </div>
    </>
  );
}

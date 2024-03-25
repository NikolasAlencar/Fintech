import MesBtn from "./MesBtn";

const Meses = () => {
  return (
    <div className="flex">
      <MesBtn numeroMes={-3} />
      <MesBtn numeroMes={-2} />
      <MesBtn numeroMes={-1} />
      <MesBtn numeroMes={0} />
    </div>
  );
};

export default Meses;

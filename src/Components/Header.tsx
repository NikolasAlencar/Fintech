import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");

  const location = useLocation();

  useEffect(() => {
    const factoryPathName: { [key: string]: string } = {
      "/": "Resumo",
      "/vendas": "Vendas",
    };
    const titleRoute = factoryPathName[location.pathname] || "Venda";

    setTitle(titleRoute);

    document.title = `Fintech | ${titleRoute}`;
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;

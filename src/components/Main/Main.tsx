import { Banner } from "../Banner/Banner";
import { Header } from "../Header/Header";
import { Timer } from "../Timer/Timer";

export const Main = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  return (
    <>
        <Timer endDate={endDate} />
        <Header />
        <main><Banner /></main>
    </>
  );
};
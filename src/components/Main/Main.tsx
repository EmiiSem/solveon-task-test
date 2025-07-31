import { Banner } from "../Banner/Banner";
import { Header } from "../Header/Header";
import { Services } from "../Services/Services";
import { Timer } from "../Timer/Timer";

import laser_eye from "../../assest/services/lazer_correct.png";
import diabetic_retinopathy from "../../assest/services/diabetic-retinopathy.jpg";
import blepharoplasty from "../../assest/services/blepharoplasty.jpg";
import macular_degeneration from "../../assest/services/Age-related-macular-degeneration.jpg";

export const Main = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 4);

  const services = [
    {
      id: 1,
      title: 'Лазерная коррекция зрения',
      imageSrc: laser_eye,
      description: 
      'После лазерной коррекции зрение становится лучше за счет того, что лазер создает новую форму роговицы — «естественной линзы» нашего глаза, вследствие чего она начинает по-другому преломлять световые лучи, они фокусируются на сетчатке и изображение становится четким.',
    },
    {
      id: 2,
      title: 'Диабетическая ретинопатия',
      imageSrc: diabetic_retinopathy,
      description: 'Диабетическая ретинопатия — это заболевание сетчатки глаза, которое развивается у людей с диабетом...',
    },
    {
      id: 3,
      title: 'Блефаропластика',
      imageSrc: blepharoplasty,
      description: 'Блефаропластика — хирургическая процедура, направленная на коррекцию век...',
    },
    {
      id: 4,
      title: 'Возрастная макулярная дегенерация',
      imageSrc: macular_degeneration,
      description: 'Возрастная макулярная дегенерация – основная причина слепоты у людей старше 60 лет. Заболевание характеризуется повреждением макулы, которая является наиболее чувствительной к свету областью сетчатки.'
    }
  ]

  return (
    <>
        <Timer endDate={endDate} />
        <Header />
        <main>
          <Banner />
          <Services services={services} />
        </main>
    </>
  );
};
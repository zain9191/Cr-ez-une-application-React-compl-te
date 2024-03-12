import Card from "../../components/Card";
import styled from "styled-components";
import colors from "../../utils/style/color";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/style/Atoms";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

function Freelances() {
  const [freelancersList, setFreelancersList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    async function fetchFreelance() {
      setDataLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/freelances`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setDataLoading(false);

        const { freelancersList } = await response.json();
        setFreelancersList(freelancersList);
      } catch (err) {
        console.log("===== error =====", err);
        alert(err);
      }
    }

    fetchFreelance();
  }, []);

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {isDataLoading ? <Loader /> : null}
        {freelancersList.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            id={profile.id}
            label={profile.job}
            title={profile.name}
            img={profile.picture}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Freelances;

import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card/index";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
    number: 14,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
    number: 3,
  },
  {
    // name: "Jeanne Biche",
    // jobTitle: "Développeuse Fullstack",
    // picture: DefaultPicture,
    number: 12,
  },
];

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
          number={profile.number}
        />
      ))}
    </div>
  );
}

export default Freelances;

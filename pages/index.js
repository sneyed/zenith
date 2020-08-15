import Avatar from "../components/avatar";
import Dropdown from "../components/dropdown";

const Home = () => (
  <div style={{ display: "flex" }}>
    <Avatar name="Loki McKay" src="https://i.imgur.com/niM85vH.png" />
    <Dropdown
      align="right"
      button={
        <Avatar name="Loki McKay" src="https://i.imgur.com/niM85vH.png" />
      }
      items={[
        {
          text: "Profile",
        },
        {
          text: "Settings",
        },
        {
          text: "Sign out",
        },
      ]}
    />
  </div>
);

export default Home;

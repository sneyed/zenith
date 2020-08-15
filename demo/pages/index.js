import { Avatar, Button, Dropdown } from "@sneyed/zenith";
import Section from "../components/section";

const Home = () => (
  <>
    <Section title="Avatar">
      <Avatar name="Loki McKay" src="https://i.imgur.com/niM85vH.png" />
    </Section>
    <Section title="Button">
      <Button />
      <Button selected />
      <Button type="tab" />
      <Button type="tab" selected />
    </Section>
  </>
);

export default Home;
{
  /* <Section title="Dropdown">
  <Dropdown
    align="right"
    button={<Avatar name="Loki McKay" src="https://i.imgur.com/niM85vH.png" />}
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
</Section>; */
}

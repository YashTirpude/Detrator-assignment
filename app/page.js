import { Container } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}

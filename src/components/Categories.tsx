import styled from "styled-components";
import { boxes } from "../utils/constants";
import Carrousel from "./Carrousel";

const Categories = () => {
  return (
    <Container>
      <Carrousel data={boxes} views={9} />
    </Container>
  );
};

export default Categories;

const Container = styled.section`
  padding: 0 10px;
  width: 95%;
  margin: 80px auto 0;
`;

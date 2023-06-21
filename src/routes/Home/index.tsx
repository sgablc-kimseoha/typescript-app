import Logo from 'components/Logo';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  > img,
  > svg {
    display: block;
    width: 200px;
    margin-bottom: 20px;
  }

  > h2 {
    font-size: 18px;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Logo />
    </StyledHome>
  );
};

export default Home;

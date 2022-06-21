import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  .home {
    width: 50%;
  }
`;

export default function Home(props) {
    return (
      <StyledHome>
        <div className="home">
          <h1>
            Hello! My name is Nathan and I am a Software Engineer with a
            background in science and music who is constantly learning and
            creating. A resourceful team player, I keep others in mind whether
            they are on my team or the final audience for products I create and
            work on. 
          </h1>
        </div>
      </StyledHome>
    )}
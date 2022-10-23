import styled from "styled-components";
export const ProfileContainer = styled.div`
  height: 100vh;
  background-image: url(${({ theme }) => theme.image.background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${({ theme }) => theme.container.padding};
  .userLayout {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`;
export const ProfileEdit = styled.div`
  display: flex;
  flex-direction: column;
`;

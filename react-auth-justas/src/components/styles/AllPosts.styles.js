import styled from "styled-components";

export const AllPostContainer = styled.div`
  height: 100vh;
  background-image: url(${({ theme }) => theme.image.background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${({ theme }) => theme.container.padding};
  div:first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
export const UserPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 300px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  gap: 1rem;
  word-break: break-all;

  div {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
export const SinglePostsBox = styled.div`
  width: 72%;
`;
export const InteractiveButtons = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;
export const CreatePostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
`;

import styled from "styled-components";

export const PostBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
export const SinglePosBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  div:first-child {
    font-size: 50px;
    border-bottom: 2px solid black;
  }
  div {
    font-size: 25px;
    font-weight: 700;

    img {
      width: 300px;
    }
  }
`;

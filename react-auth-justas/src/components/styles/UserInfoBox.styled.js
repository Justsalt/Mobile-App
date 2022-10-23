import styled from "styled-components";

export const UserInfoBoxContainer = styled.div`
  border: 4px solid black;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  height: 335px;
  div {
    border-bottom: 2px solid;
  }
`;

import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PostBox = styled.div`
  width: 200px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.white};
`;

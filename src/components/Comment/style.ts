import styled from "styled-components";

const CommentWrapper = styled.div`
  .comment-container {
    margin: 0.5rem 0;
    .comment-body {
      padding: 0.25rem 0;
    }
  }
  .meta-details {
    padding: 0.25rem 0;
    display: flex;
    justify-content: space-between;
    span:first-child {
      margin-right: 1rem;
    }
    .user-name {
      color: ${({ theme }) => {
        return theme.primary;
      }};
    }
  }
`;

export { CommentWrapper };

import styled from '@emotion/styled';

export type TPageTemplate = {
  children: React.ReactNode;
};

export const PageTemplate = ({ children }: TPageTemplate) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

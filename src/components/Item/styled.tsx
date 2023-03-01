import styled from 'styled-components'

export const StyledItem = styled.div`
  border: 5px solid red;
  counter-increment: item;

  ::before {
    content: counter(item);
  }
`

import styled from 'styled-components'

export const Item = styled.div`
  min-height: 64px;
  min-width: 128px;
  counter-increment: item-count;

  ::before {
    content: counter(item-count);
  }
`

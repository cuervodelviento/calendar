import styled from 'styled-components'

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(7, 1fr);
  grid-template-rows: 7rem repeat(24, 1fr);
  min-block-size: 700px;
`

export const Item = styled.div`
  min-height: 64px;
  min-width: 128px;
  counter-increment: item-count;

  ::before {
    content: counter(item-count);
  }
`

import styled from 'styled-components'
export const CalendarWrapper = styled.div`
color: var(--gray20);
  padding-inline: 1.5rem;
  --minBlockSize: 4rem;
  --maxBlockSize: auto;
  --minInlineSize: 5rem;
  --maxInlineSize: 1fr;
  position: relative;
}`

export const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: auto repeat(7, minmax(var(--minInlineSize), var(--maxInlineSize)));
  grid-template-rows: 7rem repeat(24, minmax(var(--minBlockSize), var(--maxBlockSize)));
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

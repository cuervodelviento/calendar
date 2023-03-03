import styled from 'styled-components'
export const CalendarWrapper = styled.div`
  color: var(--gray20);
  padding-inline: 1.5rem;
  --minBlockSize: 4rem;
  --maxBlockSize: auto;
  --minInlineSize: 5rem;
  --maxInlineSize: 1fr;
  position: relative;
`

export const CalendarWeek = styled.div`
  display: grid;
  grid-template-columns: auto repeat(7, minmax(var(--minInlineSize), var(--maxInlineSize)));
  grid-template-rows: 7rem repeat(24, minmax(var(--minBlockSize), var(--maxBlockSize)));
  min-block-size: 700px;
`

export const Item = styled.div`
  counter-increment: item-count;
  border-inline-start: 1px solid currentColor;
  border-block-end: 1px solid currentColor;
  padding: 0.25rem;
`

export const ItemDetail = styled.div`
  background: var(--blue10);
  color: var(--white);
  border-radius: 0.25rem;
  padding-inline: 1rem;
  padding-block: 0.625rem;
  overflow: hidden;
  font: var(--body2-medium);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    margin: 0;
    white-space: nowrap;
  }
`

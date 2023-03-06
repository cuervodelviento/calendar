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
  grid-template-columns: auto repeat(6, minmax(var(--minInlineSize), var(--maxInlineSize)));
  grid-template-rows: 7rem repeat(24, minmax(var(--minBlockSize), var(--maxBlockSize)));
  min-block-size: 700px;
`

export const Item = styled.div`
  counter-increment: item-count;
  border-inline-start: 1px solid currentColor;
  border-block-end: 1px solid currentColor;
  padding: 0.25rem;
`
export const CalendarDay = styled.h2<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  position: sticky;
  inset-block-start: 0;
  background: var(--white);

  a {
    text-decoration: none;
    color: currentColor;
    outline: none;
    :hover,
    :focus {
      span {
        :nth-of-type(2) {
          background-color: var(--gray10);
        }
      }
    }
  }
  span {
    :nth-of-type(1) {
      font: var(--body1-regular);
    }
    :nth-of-type(2) {
      font: var(--subtitle-subtitle1);
      line-height: 2.75rem;
      inline-size: 2.75rem;
      display: inline-block;
      border-radius: 50%;
      ${({ isActive }) =>
        isActive &&
        `
        background: var(--blue30);
        color: var(--white);
      `}
    }
  }
  ::before {
    content: '';
    inline-size: 1px;
    block-size: 2rem;
    background: currentColor;
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
  }
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

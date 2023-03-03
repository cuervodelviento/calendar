import { Item } from './styled'

const CalendarItem = ({ children }: { children?: React.ReactNode }) => {
  return <Item>{children}</Item>
}

export default CalendarItem

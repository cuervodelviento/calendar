import Calendar from '../Calendar'
import { CalendarContainer, Header, Page, Sidebar } from './styled'

const Layout = () => {
  return (
    <Page>
      <Header>header</Header>
      <Sidebar>sidebar</Sidebar>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </Page>
  )
}

export default Layout

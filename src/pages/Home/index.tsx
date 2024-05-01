import { Banner } from '../../components/Banner'

import { ProjectSection } from '../../components/ProjectSection'
import { Container } from '../../styles'

export const Home = () => {
  return (
    <>
      <div>
        <Container>
          <Banner />
          <ProjectSection />
        </Container>
      </div>
    </>
  )
}

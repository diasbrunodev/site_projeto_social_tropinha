import { OurActivities } from '../OurActivities'
import { HelpUs } from '../HelpUs'
import { HelpUsPhoto } from '../HelpUsPhoto'
import { ImageFuture } from '../ImageFuture'
import { OurGuidelines } from '../OurGuidelines'
import { Partners } from '../OurPartners'
import { Project } from '../Project'
import { SectionsSecondary } from './styles'

export const ProjectSection = () => {
  return (
    <>
      <div>
        <Project />
        <SectionsSecondary>
          <OurGuidelines />
          <OurActivities />
          <HelpUs />
          <HelpUsPhoto />
          <Partners />
          <ImageFuture />
        </SectionsSecondary>
      </div>
    </>
  )
}

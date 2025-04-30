import React from 'react'
import Home from './component/homeComponent/home'
import About from './component/aboutComponent/about'
import ContentCreationPlatform from './component/generatorComponent/generator'
import CharacterLabsShowcase from './component/FeatureComponent/feature'
import PoseControlShowcase from './component/WorkComponent/work'
import CommunityConnect from './component/connectComponent/connect'
import FAQAccordion from './component/faqComponent/faqComponent'
import TalentHubFooter from './component/footerComponent/footer'
import TalentLearningShowcase from './component/WorkComponent/work'
import ExpertGrid from './component/aboutComponent/about2'

export default function App() {
  return (<>
      <Home/>
      <ExpertGrid/>
      {/* <About/> */}
      <ContentCreationPlatform/>
      <CharacterLabsShowcase/>
      <TalentLearningShowcase/>
      <CommunityConnect/>
      {/* <FAQAccordion/> */}
      <TalentHubFooter/>
    </>
  )
}

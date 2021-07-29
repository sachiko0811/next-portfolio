import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faReact,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faWordpress,
  faGitAlt,
 } from "@fortawesome/free-brands-svg-icons"

import PageHeader from '../widgets/PageHeader'

const About = () => {
  return (
    <div>
      <PageHeader />
      <div>
        <h1 className="text-sm">Who am I</h1>
        <p className="text-lg font-bold">user-friendly, creative, inquisitive. </p>
      </div>

      <div>
        <h1>Skills</h1>
        <div className="flex space-x-4 text-3xl">
          
          <FontAwesomeIcon icon={faReact} className="hover:text-icons-react"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faHtml5} className="hover:text-icons-html5"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCss3Alt} className="hover:text-icons-css3"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faJsSquare} className="hover:text-icons-js"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSass} className="hover:text-icons-sass"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faWordpress} className="hover:text-icons-wp"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faGitAlt} className="hover:text-icons-git"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}

export default About
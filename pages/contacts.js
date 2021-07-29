import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faGithub,
  faLinkedinIn,
  faTwitter,
 } from "@fortawesome/free-brands-svg-icons"
 import {
   faEnvelope,
 } from "@fortawesome/free-solid-svg-icons"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

import PageHeader from "../widgets/PageHeader"

const Contacts = () => {
  return (
    <>
    <PageHeader />
    <div className="space-x-4">
      <h1>Contacts</h1>
      <br />
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        <p>sachiko.dev.0811@gmail.com</p>
      </div>
      
      <div className="flex space-x-4">
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </div>
    </div>
    </>
  )
}

export default Contacts
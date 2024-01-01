import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faAngellist, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Socials = (flex) => {
    const socials =
        [
        {icon: faGithub, url: "https://github.com/sferna10}
        {icon:  faEnvelope, url: "mailto:sferna10@email.cpcc.edu.com"}],

  return (
    <div className={`flex gap-5 ` + flex.flex}>
        {
            socials.map((element, index) => {
                return <a href={element.url} key={index} className='hover:text-pink-400  text-neutral-600' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={element.icon} className='md:w-8 md:h-8 max-sm:w-6 max-sm:h-6 hover:-translate-y-1 transition-transform' />
                    </a>

            })
        }
    </div>
  )
}

export default Socials

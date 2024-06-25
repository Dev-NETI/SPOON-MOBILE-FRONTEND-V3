import logo from '../../public/images/spoon_logo.png'
import Image from 'next/image'
const ApplicationLogo = props => (
    <Image src={logo} alt="Spoon Logo" width={200} height={200} />
)

export default ApplicationLogo

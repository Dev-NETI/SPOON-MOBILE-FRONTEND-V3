import logo from '../../public/images/spoon_logo.png'
import Image from 'next/image'
const ApplicationLogo = () => (
    <Image src={logo} alt="Spoon Logo" width={200} height="auto" priority />
)

export default ApplicationLogo

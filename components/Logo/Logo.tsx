import LogoSVG from '@/components/Logo/logo.svg'
import { Svg } from 'react-optimized-image'

type Props = Omit<React.SVGProps<SVGSVGElement>, 'src'>
const Logo: React.FC<Props> = (props) => <Svg src={LogoSVG} {...props} />

export default Logo

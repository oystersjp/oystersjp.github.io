// NOTE: airbnb/babel-plugin-inline-react-svgがaliasに非対応のため相対パスで読み込んでいます
// https://github.com/airbnb/babel-plugin-inline-react-svg/pull/17
import LogoSVG from '@/components/Logo/logo.svg'
import { Svg } from 'react-optimized-image'

type Props = Omit<React.SVGProps<SVGSVGElement>, 'src'>
const Logo: React.FC<Props> = (props) => <Svg src={LogoSVG} {...props} />

export default Logo

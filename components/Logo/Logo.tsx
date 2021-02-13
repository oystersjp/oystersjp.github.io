// NOTE: airbnb/babel-plugin-inline-react-svgがaliasに非対応のため相対パスで読み込んでいます
// https://github.com/airbnb/babel-plugin-inline-react-svg/pull/17
import LogoSVG from './logo.svg'

export const Logo: typeof LogoSVG = (props) => <LogoSVG {...props} />

export default Logo

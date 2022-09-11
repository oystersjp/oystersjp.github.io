type Props = Omit<React.SVGProps<HTMLImageElement>, 'src'>

const Logo: React.FC<Props> = (props) => (
  <span
    dangerouslySetInnerHTML={{
      __html: require('@/components/Logo/logo.svg?include')
    }}
    {...props}
  />
)

export default Logo

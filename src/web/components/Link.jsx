import NextLink from "next/link"

const Link = (props) => {
  const { href, ...otherProps } = props

  return <NextLink href={href} {...otherProps}></NextLink>
}

export default Link

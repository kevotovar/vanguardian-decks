import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { Children } from 'react'

type ActiveLinkProps = LinkProps & {
  children: any
  activeClassName?: string
}

function ActiveLink({ children, activeClassName, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || undefined,
      })}
    </Link>
  )
}

export default ActiveLink

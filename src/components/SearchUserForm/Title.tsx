import React from 'react'

type TitleProps = React.HtmlHTMLAttributes<HTMLHeadingElement>

export function Title({ children }: TitleProps) {
  return <h1>{children}</h1>
}

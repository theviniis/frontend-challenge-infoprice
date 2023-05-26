import React from 'react'

type TitleProps = React.HtmlHTMLAttributes<HTMLParagraphElement>

export function Description({ children }: TitleProps) {
  return <p>{children}</p>
}

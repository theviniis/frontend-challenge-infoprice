import styles from './ErrorMessage.module.css'

type ErrorMessageProps = React.HtmlHTMLAttributes<HTMLParagraphElement>

export function ErrorMessage({
  children,
  className,
  ...props
}: ErrorMessageProps) {
  return (
    <p className={`${styles.errorMessage} ${className}`} {...props}>
      <strong>{children}</strong>
    </p>
  )
}

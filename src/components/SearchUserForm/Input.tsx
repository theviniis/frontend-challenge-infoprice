import React from 'react'
import styles from './SearchUserForm.module.css'

export interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  value: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoFocus?: boolean
}

export function Input({
  value = '',
  onChange,
  id,
  type = 'text',
  className,
  autoFocus,
  ...props
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        id={id}
        className={`${styles.input} ${className}`}
        placeholder="Github username..."
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        {...props}
      />
      <button className={styles.submitBtn} type="submit">
        Search
      </button>
    </div>
  )
}

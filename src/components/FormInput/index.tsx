import { FormLabel } from '@/components/FormLabel'
import { Input } from '@/components/ui/originui/input.tsx'
import { cn } from '@/lib/utils'
import type React from 'react'
import type { InputHTMLAttributes } from 'react'
export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  help?: string
  required?: boolean
  passwordRules?: string
}

export const FormInput = ({
  ref,
  type = 'text',
  required = false,
  autoComplete = 'off',
  className = '',
  passwordRules = '',
  help = '',
  label,
  error,
  ...props
}: FormInputProps & {
  ref?: React.RefObject<HTMLInputElement>
}) => {
  const hasError = !!error

  return (
    <div className="space-y-2">
      {label && (
        <FormLabel htmlFor={props.name} required={required}>
          {label}:
        </FormLabel>
      )}
      <Input
        name={props.id}
        {...props}
        type={type}
        autoComplete={autoComplete}
        data-password-rules={passwordRules}
        className={cn('font-medium text-base rounded-sm shadow-none', className)}
        aria-invalid={hasError}
      />
      {help && <div className="text-xs font-normal text-gray-600">{help}</div>}
    </div>
  )
}

FormInput.displayName = 'FormInput'

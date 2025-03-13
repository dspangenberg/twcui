import { FormLabel } from '@/components/FormLabel'
import { Input } from '@/components/ui/input'
import type React from 'react'
import type { InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  help?: string
  required?: boolean
}

export const FormInput = ({
  ref,
  type = 'text',
  required = false,
  className = '',
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
      <Input name={props.id} {...props} type={type} className={className} aria-invalid={hasError} />
      {help && <div className="text-sm font-normal text-gray-600">{help}</div>}
    </div>
  )
}

FormInput.displayName = 'FormInput'

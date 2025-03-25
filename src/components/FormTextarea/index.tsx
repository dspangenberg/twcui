import { FormLabel } from '@/components/FormLabel'
import { Textarea } from '@/components/ui/originui/textarea.tsx'
import { cn } from '@/lib/utils'
import type React from 'react'

interface FormInputProps extends React.ComponentProps<'textarea'> {
  label?: string
  error?: string
  help?: string
  rows?: number
  required?: boolean
}

export const FormTextarea = ({
  ref,
  required = false,
  className = '',
  help = '',
  rows = 2,
  label,
  error,
  ...props
}: FormInputProps & {
  ref?: React.RefObject<HTMLTextAreaElement>
}) => {
  const hasError = !!error

  return (
    <div className="space-y-2">
      {label && (
        <FormLabel htmlFor={props.name} required={required}>
          {label}:
        </FormLabel>
      )}
      <Textarea
        ref={ref}
        rows={rows}
        {...props}
        className={cn('font-medium text-base rounded-sm shadow-none', className)}
        aria-invalid={hasError}
      />
      {help && <div className="text-sm font-normal text-gray-600">{help}</div>}
      {error && <div className="text-sm font-normal text-red-600">{error}</div>}
    </div>
  )
}

FormTextarea.displayName = 'FormTextarea'

import { FormLabel } from '@/components/FormLabel'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/originui/select'
import { cn, focusInput, hasErrorInput } from '@/lib/utils'
import type React from 'react'
import { forwardRef } from 'react'

export interface Option {
  value: string
  label: string
}

type SelectProps = React.ComponentPropsWithoutRef<typeof Select>

export interface FormSelectProps
  extends Omit<SelectProps, 'children' | 'value' | 'onValueChange' | 'defaultValue'> {
  label?: string
  value: string
  options: Option[]
  required?: boolean
  className?: string
  defaultValue?: string
  autofocus?: boolean
  placeholder?: string
  onValueChange: (value: string) => void
  error?: string
  id?: string
}

export const FormSelect = forwardRef<HTMLButtonElement, FormSelectProps>(
  (
    {
      label,
      options,
      error,
      required = false,
      className = '',
      placeholder = '(Bitte auswählen)',
      id,
      onValueChange,
      value,
      defaultValue,
      ...selectProps
    },
    ref
  ) => {
    return (
      <div className="space-y-1">
        {label && (
          <FormLabel htmlFor={id} required={required}>
            {label}:
          </FormLabel>
        )}
        <Select
          onValueChange={(newValue: string) => onValueChange(newValue)}
          value={value}
          defaultValue={defaultValue}
          {...selectProps}
        >
          <SelectTrigger
            ref={ref}
            className={cn(
              'font-medium  w-full text-base rounded-sm shadow-none ',
              error ? [hasErrorInput] : [focusInput],
              className
            )}
          >
            <SelectValue
              placeholder={placeholder}
              className={cn(' w-full text-base rounded-sm shadow-none', className)}
            />
          </SelectTrigger>
          <SelectContent>
            {options?.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && <div className="text-sm font-normal text-red-600">{error}</div>}
      </div>
    )
  }
)

FormSelect.displayName = 'FormSelect'
import { FormLabel } from '@/components/FormLabel'
import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import type { CheckboxProps } from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'

export interface FormCheckboxProps extends CheckboxProps {
  label?: string
  id: string
  className?: string
}

export const FormCheckbox = forwardRef<HTMLButtonElement, FormCheckboxProps>(
  ({ label, checked, defaultChecked, id, className, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2 ">
        <ShadcnCheckbox
          ref={ref}
          name={id}
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          {...props}
          className={cn('rounded-sm', className)}
        />
        {label && (
          <FormLabel className="text-base font-normal" htmlFor={id}>
            {label}
          </FormLabel>
        )}
      </div>
    )
  }
)

FormCheckbox.displayName = 'FormCheckbox'

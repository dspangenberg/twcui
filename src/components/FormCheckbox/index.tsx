import { FormLabel } from '@/components/FormLabel'
import { Checkbox as ShadcnCheckbox } from '@/components/ui/originui/checkbox.tsx'
import type { CheckboxProps } from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'
import { useId } from 'react'

export interface FormCheckboxProps extends CheckboxProps {
  label?: string
}

export const FormCheckbox = forwardRef<HTMLButtonElement, FormCheckboxProps>(
  ({ label, checked, defaultChecked, className, ...props }, ref) => {
    const id = useId()

    return (
      <div className="flex items-center gap-2 ">
        <ShadcnCheckbox
          ref={ref}
          name={id}
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          {...props}
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

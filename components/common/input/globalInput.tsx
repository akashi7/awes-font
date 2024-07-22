import Form, { Rule } from 'antd/lib/form'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import { ChangeEvent, FC, ReactNode } from 'react'
import GlobalImage from '../image/globalImage'

interface GlobalInputProps {
  label?: string
  placeholder?: string
  type?: 'normal' | 'file' | 'select-multiple' | 'select'
  inputType?: string
  value?: string | number | string[] | FileList | null
  name?: string
  isLoading?: boolean
  disabled?: boolean
  rules?: Rule[]
  styles?: string
  onChange?: (value: string | number | string[] | FileList | null) => void
  options?: Array<{ label: string; value: string | number }>
  defaultValue?: Array<string | number | (string | number)>
  icon?: string
  suffixIcon?: string
  isSuffixButton?: boolean
  suffixButton?: ReactNode
  reactIcon?: ReactNode
}

const GlobalInput: FC<GlobalInputProps> = ({
  label = '',
  placeholder,
  type = 'normal',
  inputType,
  value,
  name,
  isLoading,
  disabled,
  rules,
  styles,
  onChange = () => null,
  options = [],
  defaultValue = [],
  icon,
  suffixIcon,
  isSuffixButton,
  suffixButton,
  reactIcon,
}) => {
  const NormalInput = (
    <div className='mb-[-10px]'>
      {label && (
        <label className='text-[10px] text-black font-[600] mb-2 block  leading-[13.02px]'>
          {label}
        </label>
      )}

      <Form.Item name={name} rules={rules}>
        <Input
          value={value as string}
          type={inputType}
          placeholder={placeholder || 'Type'}
          className={`rounded  ${styles}  h-[48px]`}
          disabled={(type === 'file' && isLoading) || disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(type === 'file' ? e?.target?.files : e?.target?.value)
          }
          prefix={
            icon ? (
              <GlobalImage src={icon} className='' />
            ) : reactIcon ? (
              (reactIcon as ReactNode)
            ) : null
          }
          suffix={
            suffixIcon
              ? (suffixButton as ReactNode)
              : isSuffixButton
              ? (suffixButton as ReactNode)
              : null
          }
        />
      </Form.Item>
    </div>
  )

  const SelectMultipleInput = (
    <div className='mb-[-10px]'>
      {label && (
        <label className='text-[18px] text-black font-[500] mb-2 block'>
          {label}
        </label>
      )}

      <Form.Item name={name} rules={rules}>
        <Select
          className=''
          mode='multiple'
          size='large'
          loading={isLoading}
          disabled={disabled}
          placeholder={placeholder || 'Please select'}
          defaultValue={defaultValue as (string | number)[]}
          onChange={(value) => onChange(value as string[])}
          style={{
            width: '100%',
          }}
          options={options}
        />
      </Form.Item>
    </div>
  )

  const SelectInput = (
    <div className='mb-[-10px]'>
      {label && (
        <label className='text-[18px] text-black font-[500] mb-2 block'>
          {label}
        </label>
      )}

      <Form.Item name={name} rules={rules}>
        <Select
          value={value as string | number}
          onChange={(value) => onChange(value as string | number)}
          className='rounded h-[40px] border border-gray-300 flex items-center'
          loading={isLoading}
          disabled={disabled}
          options={options}
        >
          {options.map((option, index) => (
            <Select.Option key={index} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  )

  switch (type) {
    case 'select-multiple':
      return SelectMultipleInput
    case 'select':
      return SelectInput
    default:
      return NormalInput
  }
}

export default GlobalInput

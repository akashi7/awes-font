import Button from 'antd/lib/button'
import { FC, MouseEventHandler, ReactNode } from 'react'

interface GlobalButtonProps {
  disabled?: boolean
  icon?: ReactNode
  size?: 'large' | 'middle' | 'small'
  target?: string
  type?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
  onClick?: MouseEventHandler<HTMLElement>
  children?: ReactNode
  htmlType?: 'button' | 'submit' | 'reset'
  className?: string
  loading?: boolean
  form?: string
  iconPlacement?: 'right' | 'left'
}

const GlobalButton: FC<GlobalButtonProps> = ({
  disabled,
  icon,
  size,
  target,
  type,
  onClick,
  children,
  htmlType,
  className,
  loading,
  form,
  iconPlacement,
}) => {
  const PrimaryButton: FC = () => {
    return (
      <Button
        className={`${className} bg-[#C1CF16]  hover:text-white hover:bg-[#C1CF16]`}
        disabled={disabled}
        icon={(iconPlacement === 'left' || !iconPlacement) && icon}
        size={size}
        target={target}
        type={type}
        onClick={onClick}
        htmlType={htmlType}
        loading={loading}
        form={form}
      >
        {children}
        {iconPlacement === 'right' && icon}
      </Button>
    )
  }

  return <PrimaryButton />
}

export default GlobalButton

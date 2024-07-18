import Image from 'antd/lib/image'
import { CSSProperties, FC } from 'react'

interface GlobalImageProps {
  src?: string
  alt?: string
  width?: string | number
  height?: string | number
  preview?: boolean
  placeholder?: string
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const GlobalImage: FC<GlobalImageProps> = ({
  src,
  alt,
  width,
  height,
  preview,
  placeholder,
  className,
  style,
  onClick,
}) => {
  return (
    <Image
      onClick={onClick}
      style={style}
      src={src || '/img/lol.png'}
      alt={alt || ''}
      width={width}
      height={height}
      preview={!!preview}
      placeholder={placeholder || ''}
      className={className}
    />
  )
}

export default GlobalImage

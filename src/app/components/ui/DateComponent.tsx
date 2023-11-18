import { formatDate } from '@lib/contentful/utils'

interface DateProps {
  dateString: string
  options?: any
  [key: string]: any
}

const DateComponent = ({ dateString, options, ...rest }: DateProps) => {
  return (
    <time dateTime={dateString} {...rest}>
      {formatDate(dateString, options)}
    </time>
  )
}

export default DateComponent

type RandomNumberType = {
    value: number
}
type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({
    value,
     isPositive,
     isNegative,
     isZero
}: RandomNumberProps) => {
    
  return (
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
  )
}

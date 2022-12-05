import classNames from "classnames"

const Input = (props) => {
  const { className, ...otherProps } = props

  return (
    <input
      {...otherProps}
      className={classNames(
        "block w-full rounded-md border border-gray-300 py-3 px-4 text-sm font-medium text-gray-700 shadow-sm focus:border-slate-500 focus:ring-slate-500",
        className
      )}
    />
  )
}

export default Input

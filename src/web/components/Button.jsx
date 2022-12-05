const { default: classNames } = require("classnames")

const Button = (props) => {
  const { className, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(
        "group relative flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
        className
      )}
    />
  )
}

export default Button

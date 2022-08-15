import clsx from "clsx";

export default function Button(props) {
  const { children, circle, className, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !circle,
      "btn-circle": circle,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}

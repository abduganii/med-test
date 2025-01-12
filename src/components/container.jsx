

export default function Container({className,children}) {
    return (
        <div className={`w-full max-w-[1240px] px-[20px] mx-auto ${className && className}`}>
            {children}
      </div>
    )
  }
  
import * as Icons from "@radix-ui/react-icons"
import React from "react"

type IconContainerProps = {
  icon: keyof typeof Icons
  size?: number
  color?: string
}

export const IconContainer: React.FC<IconContainerProps> = ({ icon, size = 28, color = "currentColor" }) => {
  const IconComponent = Icons[icon]

  return (
    <div style={{ width: size, height: size, color }} className="rounded-md p-1.5">
      <IconComponent width="100%" height="100%" />
    </div>
  )
}

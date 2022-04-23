import { createContext, useState } from "react"
import type { FC, ReactNode, ReactElement, Dispatch, SetStateAction } from "react"

export interface TopicInterface {
  topic:string;
  isSelected:boolean;
}

export const UniversalContext = createContext<{ selectedTopics:Array<TopicInterface>; setSelectedTopics:Dispatch<SetStateAction<TopicInterface[]>> } | null>(null)

export const UniversalProvider:FC = ({children}:{children?:ReactNode}):ReactElement => {
  const [selectedTopics, setSelectedTopics] = useState<Array<TopicInterface>>([])
  
  return (
    <UniversalContext.Provider value={{selectedTopics, setSelectedTopics}}>
      {children}
    </UniversalContext.Provider>
  )
}

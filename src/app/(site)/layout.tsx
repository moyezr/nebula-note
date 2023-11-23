import { ReactNode } from 'react'

interface HomePageLayoutProps {
  children: ReactNode
}

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default HomePageLayout
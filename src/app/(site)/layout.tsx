import Header from '@/components/landing-page/header'
import { ReactNode } from 'react'

interface HomePageLayoutProps {
  children: ReactNode
}

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <main>

      <Header />
      {children}
    </main>
  )
}

export default HomePageLayout
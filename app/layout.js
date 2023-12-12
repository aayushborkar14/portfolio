import { Inter } from 'next/font/google'
import './globals.css'
import { navConfig } from "@/config/nav"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | ' + siteConfig.name,
  description: siteConfig.description
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex justify-center")}>
        <div className='w-full lg:w-4/5'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                  <MainNav items={navConfig.mainNav} />
                </div>
              </header>
              <main className="flex-1">
                {children}
              </main>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html >
  )
}

import { Logo } from '@/components/Logo'
import type React from 'react'

export interface TwicewareSolutionProps {
  hideCopyright?: boolean
  appName?: string
  appWebsite?: string
  copyrightYear?: number
  copyrightHolder?: string
  copyrightHolderWebsite?: string
}

export const TwicewareSolution: React.FC<TwicewareSolutionProps> = ({
  appName = 'App',
  appWebsite = '',
  copyrightYear = new Date().getFullYear(),
  copyrightHolder = '',
  copyrightHolderWebsite = '',
  hideCopyright = false
}) => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="w-full max-w-sm mx-auto flex items-center justify-center text-sm text-foreground">
        {appWebsite ? (
          <a
            href={appWebsite}
            className="font-medium hover:underline flex items-center mx-1.5 text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            {appName}
          </a>
        ) : (
          <span className="mx-1.5 font-medium text-foreground">{appName}</span>
        )}
        is a
        <Logo className="size-5 rounded-md mx-1.5" />
        <a
          href="https://twiceware.de"
          className="font-medium hover:underline flex items-center text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          twiceware solution
        </a>
      </div>
      {!hideCopyright && (
        <div className="text-xs text-center mt-1 mx-auto text-foreground/80">
          Copyright &copy; {copyrightYear}
          {currentYear !== copyrightYear && `-${currentYear}`}
          {copyrightHolder && (
            <>
              {' by '}
              {copyrightHolderWebsite ? (
                <a
                  href={copyrightHolderWebsite}
                  className="hover:underline inline-flex items-center text-foreground/80"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copyrightHolder}
                </a>
              ) : (
                <span className="text-foreground/80">{copyrightHolder}</span>
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}

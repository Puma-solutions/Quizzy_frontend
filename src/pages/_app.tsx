import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'

const QuizzyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default QuizzyApp
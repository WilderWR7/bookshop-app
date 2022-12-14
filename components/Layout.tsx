import { useTheme, useThemeProps } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactNode } from 'react'

interface props {
    children: ReactNode, title?: string
}

export const Layout:NextPage<props> = ({children,title = 'bookshop'}) => {
  const {palette} = useTheme()  
  return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {
        children
      }
    </div>
  )
}

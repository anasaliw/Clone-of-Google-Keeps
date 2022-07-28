import React from 'react'
import {Box,styled} from '@mui/material'
import {LightbulbOutlined as LightBulb} from '@mui/icons-material'
import { Typography } from '@mui/material'
function Empty() {
    const Light=styled(LightBulb)`
    font-size:200px;
    margin-top:50px;
    color:#F5F5F5
    `
    const Type=styled(Typography)`
    color:#80868b;
    font-size:12px;
    `
    const Component=styled(Box)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center
    `

  return (
    <Component>
        <Light />
        <Type>Nothing to show</Type>
    </Component>
  )
}

export default Empty
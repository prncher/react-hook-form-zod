
import { Stack } from '@mui/material'
import './App.css'
import LeftRightPanels from './LeftRightPanels'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <LeftRightPanels
    onOpen={o=>setOpen(o)} 
    leftPanel={
      <Stack sx={{
        backgroundColor: 'GrayText',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
      }}>This is the left panel</Stack>
    }>
      <Stack sx={{
        display: 'flex',
        width:open ? `calc(100vw - 240px) !important`: '100vw',
        height:'100vh',
        backgroundColor: 'GrayText',
        padding: '2rem',
        alignItems:'start'
      }}>This is the content</Stack>
    </LeftRightPanels>
  )
}

export default App

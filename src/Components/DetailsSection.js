import React from 'react'
import { Box, ListItem, ListItemText, Typography, List, Chip, ListItemIcon, Divider } from '@mui/material'
import attachmentSvg from '../assets/imgs/attachment.svg'
const DetailsSection = ({ article }) => {
    const { features: featrureList, attachments, keywords } = article
    return <Box sx={{ padding: 2, backgroundColor: 'white' }}>
        <Typography variant='body1' sx={{ color: 'red', marginBottom: 1 }} textAlign='left'>
            DETAILS
        </Typography>
        <Divider style={{backgroundColor: 'lightgray'}}/>
        <Box sx={{ marginBottom: 2, marginTop: 1 }}>
            <Typography textAlign='left' sx={{color: '#666666'}}>Features</Typography>
            <List dense>
                {
                    Object.entries(featrureList).map(([key, value]) => {
                        return <ListItem key={key}>
                            <ListItemText primary={<Typography key={key} varint='body1'><span style={{color: '#666666'}}>{key}</span> : <b>{value}</b></Typography>} />
                        </ListItem>
                    })
                }
            </List>
            <Typography textAlign='left' sx={{color: '#666666'}}>Attachments</Typography>
            <List dense>
                {
                    Object.entries(attachments).map(([key, value]) => {
                        return <ListItem key={key}>
                            <ListItemIcon>
                                <Box sx={{ width: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={attachmentSvg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </ListItemIcon>
                            <ListItemText primary={<a href={value.file_link} download={value.file_name}>{value.file_label}</a>} />
                        </ListItem>
                    })
                }
            </List>
            <Typography textAlign='left' sx={{color: '#666666'}} >Keywords</Typography>
            <Box justifyContent='left' display='flex'>
                {
                    keywords && keywords.map((val) => {
                        console.log(val)
                        return <Chip label={val} sx={{ backgroundColor: '#ccc', mr: 1 }} />

                    })
                }
            </Box>
        </Box>
    </Box>
}

export default DetailsSection
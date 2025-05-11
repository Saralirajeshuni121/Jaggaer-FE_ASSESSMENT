import React from 'react'
import { Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material'

const PricingAndShipping = ({ article }) => {

    const priceBreakObj = article.price_breaks
    return <Box sx={{ padding: 2, backgroundColor: 'white' }}>
        <Typography variant='body1' sx={{ color: 'red', marginBottom: 1 }} textAlign='left'>
            PRICING & SHPPING
        </Typography>
        <Divider style={{ backgroundColor: 'lightgray' }} />
        <Box sx={{ marginBottom: 2 }}>
            <List dense>
                <ListItem>
                    <ListItemText primary={<Typography><span style={{ color: '#666666' }}>Minimun Order</span>: <b>{article.minimum_order_quantity}</b></Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<Typography><span style={{ color: '#666666' }}>Shipping</span>: <b>{article.price} {article.currency}</b></Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<Typography> <span style={{ color: '#666666' }}>Delivery</span>: <b>{article.delivery_time} days</b></Typography>} />
                </ListItem>
            </List>
            <Typography textAlign='left' sx={{ color: '#666666' }}>Price breaks</Typography>
            <List dense>
                {
                    Object.entries(priceBreakObj).map(([key, value]) => {
                        return <ListItem key={key}>
                            <Box sx={{ borderBottom: '1px solid #ccc', paddingBottom: 1 }}>
                                <ListItemText primary={<Typography><b>ex {key}: {value} {article.unit}</b></Typography>} />
                            </Box>
                        </ListItem>
                    })
                }
            </List>
        </Box>
    </Box>
}

export default PricingAndShipping
import React from "react";
import { Box, Grid, Typography, Rating } from '@mui/material'
import packageImg from '../assets/imgs/package.svg'
import discountImg from '../assets/imgs/discount.svg'

const ProductSection = ({ article, addToCartSection }) => {
    return <Box sx={{ padding: 2, backgroundColor: 'white' }}>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid item xs={3}>
                            <Box sx={{ border: '1px solid gray', padding: '1' }}>
                                <Box sx={{ width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'gray' }}>
                                    <img src={packageImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box sx={{ border: '1px solid gray', padding: '1' }}>
                                <Box sx={{ width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={packageImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{ border: '1px solid gray', padding: '1' }}>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={packageImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>

                <Typography variant='body1' textAlign='left'>
                    {article.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'start', color: 'gray', marginBottom: 2 }}>
                    <Typography variant='caption' sx={{ display: 'block' }} textAlign='left'>
                        by {article.supplier_name}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                    <Rating sx={{ marginTop: 1 }} value={article.stars} readOnly />
                </Box>
                <Typography sx={{ display: 'flex', justifyContent: 'left', fontSize: '14px' }}>
                    {article.price} {article.currency} +  {article.transport_costs} shipping
                    <Box sx={{ width: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={discountImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Typography>
                <Typography variant='caption' sx={{ color: 'gray', display: 'flex', justifyContent: 'left' }}>
                    all prices incl. {article.vat_percent}% taxes
                </Typography>
                <Box style={{ marginTop: '100px' }}>
                    {addToCartSection}
                </Box>
            </Grid>
        </Grid>
    </Box>
}

export default ProductSection
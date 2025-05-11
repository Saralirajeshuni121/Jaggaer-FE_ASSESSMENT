import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, AppBar, Toolbar, IconButton, Badge, Backdrop, CircularProgress } from '@mui/material'
import productData from './data.json'
import DetailsSection from './DetailsSection'
import PricingAndShipping from './PricingAndShipping'
import ProductSection from './ProductSection'
import favourite from '../assets/imgs/favorite.svg'
import favouriteFilled from '../assets/imgs/favorite-filled.svg'
import factsSoft from '../assets/imgs/facts-soft.svg'
import cartIcon from '../assets/imgs/cart.svg'
import AddToCart from './AddToCartBtn'

const ProductScreen = ({ data = productData }) => {
    console.log(data)
    const { article } = data
    const [productSectionVisible, setProductSectionVisible] = useState(true)
    const [cartCount, setCartCount] = useState(0)
    const [textValue , setTextValue] = useState(1)
    const [fav, setFav] = useState(false)
    const [added, setAdded] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleScroll = () =>{
        if(window.screenY > 0){
            setShadow(true)
        }else{
            setShadow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return window.removeEventListener('scroll', handleScroll)
    })
    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            if(entries[0].isIntersecting){
                setProductSectionVisible(true)
            }else{
                setProductSectionVisible(false)
            }
        }, {
            rootMargin: '0px',
            threshold: 1.0
        })

        const section = document.getElementById('productSection')
        observer.observe(section)

        return () => {
            observer.unobserve(section)
        }
    })
    const onChangeAddToCartValue = (val) => {
        setAdded(true)
        setTimeout(()=>{
            setAdded(false)
        }, 1000)
        setCartCount(c =>  Number(c)+ Number(val))
    }
    const addToCartSection = <AddToCart  article={article} onChangeAddToCartValue={(onChangeAddToCartValue)} textValue={textValue} onChangeText={(val) => { val> 0 && setTextValue(Number(val))}}/>
    return <Box sx={{ backgroundColor: '#f0f0f0' }}>
        <AppBar position='sticky' elevation={shadow ? 4 : 0} sx={{ backgroundColor: '#f7f7f7', transition: 'box-shadow 0.3s ease-in-out'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant='h6' textAlign='left' sx={{ color: 'red' }}>{article.title}</Typography>
                </Box>
                <Box container sx={{ display: 'flex', gap: 1 }}>
                    {!productSectionVisible && addToCartSection }
                    <IconButton onClick={()=>{
                        setFav(!fav)
                    }}>
                        <Box sx={{ width: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <img src={fav ? favouriteFilled :favourite} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </IconButton>
                    <IconButton>
                        <Box sx={{ width: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <img src={factsSoft} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </IconButton>

                    <IconButton >
                        <Badge badgeContent={cartCount} color="error">
                            <Box sx={{ width: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <img src={cartIcon} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <div id="productSection">
        <ProductSection article={article} addToCartSection={addToCartSection}/>
        <Backdrop open={added} sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <CircularProgress color='inherit'/>
        </Backdrop>
        </div>
        <Box sx={{ padding: 2, backgroundColor: '#f0f0f0' }}>
            <Grid marginTop={4}>
                <Typography variant='body1' textAlign='left' sx={{ color: 'red' }}>
                    DESCRIPTION
                </Typography>
                <Typography variant='body2' textAlign='left'>
                    {article.description_long}
                </Typography>
            </Grid>
        </Box>
        <Box container sx={{ display: 'flex', backgroundColor: '#f0f0f0', gap: 2, padding: 4, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1 }}>
                <DetailsSection article={article} />
            </Box>
            <Box sx={{ flex: 1 }}>
                <PricingAndShipping article={article} />
            </Box>
        </Box>
    </Box>
}

export default ProductScreen
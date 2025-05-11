import React  from "react";
import { Grid, TextField, Typography, Button } from "@mui/material";

const AddToCart = ({article, onChangeAddToCartValue,textValue , onChangeText}) => {


    return <Grid container spacing={1} sx={{  alignItems: 'center' }}>
        <Grid item xs={4}>
            <TextField value={textValue} size='small' style={{width: '100px'}} type="number" onChange={(e) => {onChangeText(e.target.valueAsNumber)}}/>
            <Typography variant='body2' sx={{ display: 'inline', marginLeft: 1, color:'black' }}>
                {article.unit}
            </Typography>
        </Grid>
        <Grid item xs={8}>
            <Button variant='contained' sx={{ backgroundColor: 'red' }} onClick={() => onChangeAddToCartValue(textValue)}>
                + Add to cart
            </Button>
        </Grid>
    </Grid>
}

export default AddToCart
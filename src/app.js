import express from 'express';
import Router from './routes/router.js';
import cartRouter from './routes/cartrouter.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', Router);
app.use('/api/cart', cartRouter);

// app.use('/static', express.static(`${config.DIRNAME}/public`));

app.listen(config.PORT, () => {
    console.log(`Server activo en puerto ${PORT}`);
});
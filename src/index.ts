import { ExpressConfig } from './config';
import "reflect-metadata";

const express = new ExpressConfig;

express.app.listen(3000,() => {
    console.log("Running server");
})
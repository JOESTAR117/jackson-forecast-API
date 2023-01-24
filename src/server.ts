import './util/module-alias';
import { Server } from '@overnightjs/core';
import express from 'express';
import { ForecastController } from './controllers/forecast';

export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(express.json())
    }

    private setupControllers(): void{
        const forecastController = new ForecastController();
        this.addControllers([forecastController]);
    }

    public getApp(): express.Application {
        return this.app
    }
}
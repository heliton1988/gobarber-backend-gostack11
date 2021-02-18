import 'reflect-metadata';
import { createConnections } from 'typeorm';

createConnections().then(response => response);

import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { platform } from "node:process"
import './style.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Platform: {platform}</h1>);
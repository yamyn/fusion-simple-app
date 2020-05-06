import App from 'fusion-react';
import Root from './components/root';
import TodosPlugin from './plugins/todos';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';

export default async function start() {
    const app = new App(Root);
    if (__NODE__) {
        app.middleware(require('koa-bodyparser')());
        app.middleware(TodosPlugin);
    }
    app.register(HelmetPlugin);
    return app;
}

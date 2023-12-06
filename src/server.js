// src/server.js
import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
    let server = createServer({
        environment,

        models: {
            user: Model,
            // Добавьте здесь другие модели, если необходимо
        },

        seeds(server) {
            // Здесь вы можете создать начальные данные для вашего мок-сервера
            server.create('user', { name: 'Alice' });
            server.create('user', { name: 'Bob' });
        },

        routes() {
            this.namespace = 'api'; // Префикс для всех маршрутов

            this.get('/users', (schema, request) => {
                return schema.users.all();
            });

            this.post('/auth/login', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                if (attrs.email === 'user@example.com' && attrs.password === 'password') {
                    return { token: 'fake-token', user: { name: 'Alice' } };
                } else {
                    // return new Response(401, {}, { error: 'Invalid email or password' });
                    return { error: 'Invalid email or password' }
                }
            });

            // Добавьте здесь другие маршруты, если необходимо
        },
    });

    return server;
}

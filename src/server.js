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

      // Пример маршрута для получения списка пользователей
      this.get('/users', (schema, request) => {
        return schema.users.all();
      });

      // Добавьте здесь другие маршруты, если необходимо
    },
  });

  return server;
}

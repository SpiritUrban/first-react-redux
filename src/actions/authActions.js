// actions/authActions.js

// Функция для асинхронного действия аутентификации
export const loginAction = (email, password) => async (dispatch) => {
    try {
      // Диспетчеризация действия начала аутентификации
      dispatch({ type: 'LOGIN_START' });
  
      // Отправка запроса на сервер для аутентификации
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Ошибка аутентификации');
      }
  
      const data = await response.json();
  
      // Диспетчеризация действия успешной аутентификации
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      
      // Вы можете сохранить токен аутентификации в localStorage или выполнить другие действия
      localStorage.setItem('authToken', data.token);
  
    } catch (error) {
      // Диспетчеризация действия ошибки аутентификации
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
  